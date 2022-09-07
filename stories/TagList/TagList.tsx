import { Tag } from "../Tag/Tag";

interface TagListProps {
  tags: Array<{
    label: string;
    size?: "sm" | "md" | "lg";
    status?: "approved" | "reprobate" | "review" | "theme" | "format" | "event";
  }>;
}

export const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="grid gap-4 grid-cols-3">
      {tags.map((tag) => (
        <Tag
          key={tag.label}
          label={tag.label}
          status={tag.status}
          size={tag.size}
        />
      ))}
    </div>
  );
};
