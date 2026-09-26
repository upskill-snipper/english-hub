import { arc, deg, gouge } from '@/components/comics/linocut/carve'

/**
 * Cuts for the plain heads the Macbeth panels share (HEAD_BEARD and HEAD_OLD
 * in ./inverness-people.tsx), used by the panels for moments 1 to 5 (Act 1,
 * Scenes 1 to 5), where the heads are drawn large enough to carry them.
 *
 * A black profile on its own reads as a bald man; a few white cuts for the
 * hair swept back, the ear, the edge of the beard and the line of the mouth
 * make it a head of hair and a beard. Nothing here describes anyone: the play
 * says almost nothing of how its people look (the reasons are in
 * ./inverness-people.tsx and in the portraits), so these are plain heads.
 *
 * In the heads' own frame: centred on (0, 0), facing right, about 38 by 44.
 */

/** Hair swept back from the brow over the crown, as filled paper gouges. */
export const HAIR_CUTS =
  gouge(9, -17.5, -7, -15, 0.75, -0.8) +
  gouge(11, -13, -10, -8, 0.75, -0.8) +
  gouge(8, -9, -12, -1, 0.75, -0.8) +
  gouge(3, -4.5, -12.5, 7, 0.7, -0.6)

/** The ear, the edge of the beard, a strand or two in it, and the mouth: stroke these. */
export const BEARD_LINES =
  arc(-2, 2.5, 3.2, deg(-80), deg(110)) +
  'M3 -1C5 7 8 15 9.5 22.5M12.4 11L13.2 20M15.6 11.4L16 17.6M17.6 9L13.6 9.8'
