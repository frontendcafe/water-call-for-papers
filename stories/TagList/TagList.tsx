import { Tag, TagProps } from "../Tag/Tag";

interface TagListProps {
  tags: TagProps[];
}

export const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag
          key={tag.label}
          label={tag.label}
          status={tag.status}
          size={tag.size}
          onClick={tag.onClick}
        />
      ))}
    </div>
  );
};
