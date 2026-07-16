// Icon registry backed by @lucide/svelte. We statically import only the icons the
// app actually uses (chrome + the curated category-picker set) so we don't bundle
// all ~2000 Lucide icons. Keys are stable names referenced via <Icon name="...">.
import X from '@lucide/svelte/icons/x';
import Plus from '@lucide/svelte/icons/plus';
import Minus from '@lucide/svelte/icons/minus';
import Pencil from '@lucide/svelte/icons/pencil';
import Trash2 from '@lucide/svelte/icons/trash-2';
import Copy from '@lucide/svelte/icons/copy';
import Download from '@lucide/svelte/icons/download';
import Upload from '@lucide/svelte/icons/upload';
import Folder from '@lucide/svelte/icons/folder';
import FilePlus2 from '@lucide/svelte/icons/file-plus-2';
import Waypoints from '@lucide/svelte/icons/waypoints';
import ChevronDown from '@lucide/svelte/icons/chevron-down';
import ChevronUp from '@lucide/svelte/icons/chevron-up';
import ChevronRight from '@lucide/svelte/icons/chevron-right';
import Check from '@lucide/svelte/icons/check';
import Menu from '@lucide/svelte/icons/menu';
import UserCheck from '@lucide/svelte/icons/user-check';
import CircleHelp from '@lucide/svelte/icons/circle-help';
import Tags from '@lucide/svelte/icons/tags';
// category-picker icons
import Database from '@lucide/svelte/icons/database';
import Eye from '@lucide/svelte/icons/eye';
import FlaskConical from '@lucide/svelte/icons/flask-conical';
import Brain from '@lucide/svelte/icons/brain';
import GraduationCap from '@lucide/svelte/icons/graduation-cap';
import Landmark from '@lucide/svelte/icons/landmark';
import Church from '@lucide/svelte/icons/church';
import Sparkles from '@lucide/svelte/icons/sparkles';
import Lightbulb from '@lucide/svelte/icons/lightbulb';
import Scale from '@lucide/svelte/icons/scale';
import Heart from '@lucide/svelte/icons/heart';
import Globe from '@lucide/svelte/icons/globe';
import Atom from '@lucide/svelte/icons/atom';
import Quote from '@lucide/svelte/icons/quote';
import Users from '@lucide/svelte/icons/users';
import Gavel from '@lucide/svelte/icons/gavel';
import Compass from '@lucide/svelte/icons/compass';
import Star from '@lucide/svelte/icons/star';
import Flag from '@lucide/svelte/icons/flag';
import Leaf from '@lucide/svelte/icons/leaf';
import BookOpen from '@lucide/svelte/icons/book-open';
import Microscope from '@lucide/svelte/icons/microscope';
import Telescope from '@lucide/svelte/icons/telescope';
import Newspaper from '@lucide/svelte/icons/newspaper';
import MessageCircle from '@lucide/svelte/icons/message-circle';
import Zap from '@lucide/svelte/icons/zap';
import Shield from '@lucide/svelte/icons/shield';
import Target from '@lucide/svelte/icons/target';
import Feather from '@lucide/svelte/icons/feather';
import ScrollText from '@lucide/svelte/icons/scroll-text';

export const ICON_MAP = {
	// chrome (friendly names kept so component call-sites need no change)
	close: X,
	plus: Plus,
	minus: Minus,
	edit: Pencil,
	delete: Trash2,
	copy: Copy,
	download: Download,
	upload: Upload,
	folder: Folder,
	'file-plus': FilePlus2,
	move: Waypoints,
	'chevron-down': ChevronDown,
	'chevron-up': ChevronUp,
	'chevron-right': ChevronRight,
	check: Check,
	menu: Menu,
	'account-check': UserCheck,
	help: CircleHelp,
	tags: Tags,
	// category icons (Lucide kebab names)
	database: Database,
	eye: Eye,
	'flask-conical': FlaskConical,
	brain: Brain,
	'graduation-cap': GraduationCap,
	landmark: Landmark,
	church: Church,
	sparkles: Sparkles,
	lightbulb: Lightbulb,
	scale: Scale,
	heart: Heart,
	globe: Globe,
	atom: Atom,
	quote: Quote,
	users: Users,
	gavel: Gavel,
	compass: Compass,
	star: Star,
	flag: Flag,
	leaf: Leaf,
	'book-open': BookOpen,
	microscope: Microscope,
	telescope: Telescope,
	newspaper: Newspaper,
	'message-circle': MessageCircle,
	zap: Zap,
	shield: Shield,
	target: Target,
	feather: Feather,
	'scroll-text': ScrollText
} as const;

export type IconName = keyof typeof ICON_MAP;

export const FALLBACK_ICON: IconName = 'help';
