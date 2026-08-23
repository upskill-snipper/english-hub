-- Add the 'returned' submission status.
--
-- The teacher review flow has a "send back" decision, documented as "returned
-- to student". But it mapped to `teacher_review_required` - the SAME status
-- the "correct" decision uses to keep a submission in the marking queue - and
-- the student read route only reveals teacher/AI fields when status is
-- 'approved'. So a teacher could write feedback, send it back, and the student
-- would never see it: the loop dead-ended at the teacher.
--
-- 'returned' separates "I have given this back to the student with feedback"
-- from "this is still mid-review in the queue", which lets the student route
-- reveal the teacher's feedback for exactly the first case.
--
-- Idempotent: drops and recreates the CHECK with the added value.

ALTER TABLE public.marking_submissions
  DROP CONSTRAINT IF EXISTS marking_submissions_status_check;

ALTER TABLE public.marking_submissions
  ADD CONSTRAINT marking_submissions_status_check CHECK (status IN (
    'submitted', 'pending', 'ai_marked', 'teacher_review_required',
    'teacher_reviewed', 'approved', 'rejected',
    'returned',
    'training_ready', 'excluded_from_training'
  ));
