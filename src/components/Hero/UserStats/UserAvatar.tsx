interface UserAvatarProps {
  url: string;
  index: number;
}

export const UserAvatar = ({ url, index }: UserAvatarProps) => (
  <img
    className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full ring-2 ring-white"
    src={`${url}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
    alt=""
    style={{ marginLeft: index === 0 ? 0 : '-0.5rem' }}
  />
);