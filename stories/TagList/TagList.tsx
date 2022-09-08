import { Tag, TagProps } from "../Tag/Tag";

interface TagListProps {
  tags: TagProps[];
}

export const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {tags.map(({ label, status, size, isSelected, onClick, onDelete }) => (
        <Tag
          key={label}
          label={label}
          status={status}
          size={size}
          isSelected={isSelected}
          onClick={onClick}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
