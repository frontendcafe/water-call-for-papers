import { Tag } from "../Tag/Tag";

interface TagListProps {
  tags: Array<{
    label: string;
    hidden?: boolean | undefined;
    size?: "sm" | "md" | "lg";
    style: "primary" | "secondary";
  }>;
}

export const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="grid gap-4 grid-cols-3">
      {tags.map((tag) => (
        <Tag
          key={tag.label}
          label={tag.label}
          style={tag.style}
          hidden={tag.hidden}
          size={tag.size}
        />
      ))}
    </div>
  );
};
