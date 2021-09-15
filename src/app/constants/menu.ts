import { environment } from 'src/environments/environment';
import { UserRole } from '../shared/auth.roles';
const adminRoot = environment.adminRoot;

export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
  roles?: UserRole[];
}

const data: IMenuItem[] = [
  {
    icon: 'glyph-icon simple-icon-layers',
    label: 'menu.myrxiv',
    to: `${adminRoot}/myrxiv`,
    roles: [ UserRole.Client],
  },
  {
    icon: 'glyph-icon iconsminds-folder-open',
    label: 'menu.myfiles',
    to: `${adminRoot}/myfiles`,
    roles: [UserRole.Client],
  },
  {
    icon: 'glyph-icon iconsminds-reverbnation',
    label: 'menu.starred',
    to: `${adminRoot}/starred`,
    roles: [UserRole.Client]
  },
  {
    icon: 'glyph-icon simple-icon-share',
    label: 'menu.recommended',
    to: `${adminRoot}/recommended`,
    roles: [UserRole.Client],

  },
  {
    icon: 'glyph-icon simple-icon-speedometer',
    label: 'menu.recent',
    to: `${adminRoot}/recent`,
    roles: [UserRole.Client]
  },
  {
    icon: 'glyph-icon iconsminds-bucket',
    label: 'menu.trash',
    to: `${adminRoot}/trash`,
    roles: [UserRole.Client]
  }
];
export default data;
