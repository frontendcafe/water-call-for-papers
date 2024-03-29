import {
  AdjustmentsVerticalIcon,
  ArrowDownIcon,
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ArrowRightCircleIcon,
  ArrowRightIcon,
  ArrowRightOnRectangleIcon,
  ArrowUpIcon,
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3CenterLeftIcon,
  BellIcon,
  BookmarkIcon,
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
  ClockIcon,
  CogIcon,
  DocumentArrowDownIcon,
  DocumentDuplicateIcon,
  DocumentIcon,
  DocumentMinusIcon,
  DocumentPlusIcon,
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon as ExclamationCircleIconOutline,
  EyeIcon,
  HomeIcon,
  InformationCircleIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MinusCircleIcon,
  PaperClipIcon,
  PencilIcon,
  PencilSquareIcon,
  PhotoIcon,
  PlusCircleIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
  ShareIcon,
  ShieldExclamationIcon,
  Square2StackIcon,
  TagIcon,
  TrashIcon,
  UserCircleIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
  XMarkIcon,
  GlobeAltIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const iconsSupported = {
  mail: EnvelopeIcon,
  bell: BellIcon,
  home: HomeIcon,
  shield: ShieldExclamationIcon,
  cog: CogIcon,
  check: CheckIcon,
  detail: PencilSquareIcon,
  pencil: PencilIcon,
  eye: EyeIcon,
  book: BookmarkIcon,
  mapPin: MapPinIcon,
  user: UserIcon,
  users: UsersIcon,
  userGroup: UserGroupIcon,
  clock: ClockIcon,
  document: DocumentIcon,
  tag: TagIcon,
  xMark: XMarkIcon,
  plus: PlusIcon,
  calendar: CalendarIcon,
  barsCenterLeft: Bars3CenterLeftIcon,
  barsBottomLeft: Bars3BottomLeftIcon,
  barsBottomRight: Bars3BottomRightIcon,
  share: ShareIcon,
  arrowRightC: ArrowRightCircleIcon,
  userCircle: UserCircleIcon,
  documentArrowDown: DocumentArrowDownIcon,
  documentPlus: DocumentPlusIcon,
  documentMinus: DocumentMinusIcon,
  link: LinkIcon,
  questionMark: QuestionMarkCircleIcon,
  exclamationTriangule: ExclamationTriangleIcon,
  squareTwoStack: Square2StackIcon,
  arrowLeft: ArrowLeftIcon,
  minusCircule: MinusCircleIcon,
  chevronDown: ChevronDownIcon,
  arrowLeftCircule: ArrowLeftCircleIcon,
  chevronUp: ChevronUpIcon,
  adjustment: AdjustmentsVerticalIcon,
  informationCircle: InformationCircleIcon,
  arrowUp: ArrowUpIcon,
  documentDuplicate: DocumentDuplicateIcon,
  arrowDown: ArrowDownIcon,
  plusCircle: PlusCircleIcon,
  logout: ArrowRightOnRectangleIcon,
  paperClip: PaperClipIcon,
  trash: TrashIcon,
  chevronUpDown: ChevronUpDownIcon,
  dotsHorizontal: EllipsisHorizontalIcon,
  arrowRight: ArrowRightIcon,
  exclamationCircle: ExclamationCircleIcon,
  chevronRight: ChevronRightIcon,
  glass: MagnifyingGlassIcon,
  checkCircle: CheckCircleIcon,
  chevronLeft: ChevronLeftIcon,
  dotsVertical: EllipsisVerticalIcon,
  photo: PhotoIcon,
  exclamationCircleIconOutline: ExclamationCircleIconOutline,
  globeAltIcon: GlobeAltIcon,
  arrowUpTray: ArrowUpTrayIcon,
};

const iconSize = {
  small: "w-4 h-4",
  medium: "w-6 h-6",
  large: "w-8 h-8",
  extraLarge: "w-12 h-12",
};

// This also can be used
// extends React.ComponentProps<"svg">
interface IconProps {
  "aria-hidden"?: boolean | "false" | "true";
  iconName: keyof typeof iconsSupported;
  size?: keyof typeof iconSize;
  // Custom sizes, fill, stroke via className (as props)
  className?: string;
}

export function Icon({
  "aria-hidden": ariaHidden = "true",
  iconName,
  size = "medium",
  className,
}: IconProps) {
  const SelectedIcon = iconsSupported[iconName];

  return (
    <SelectedIcon
      aria-hidden={ariaHidden}
      className={`${iconSize[size]} ${className}`}
    />
  );
}
