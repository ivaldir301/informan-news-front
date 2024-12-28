import { cn } from '../../lib/utils';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export const NavLink = ({ className, active, ...props }: NavLinkProps) => {
  return (
    <a
      {...props}
      className={cn(
        'px-3 py-2 rounded-md transition-colors duration-200',
        active && 'bg-blue-50 text-blue-600',
        'hover:bg-blue-50 hover:text-blue-600',
        className
      )}
    />
  );
};