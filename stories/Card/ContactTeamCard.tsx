import { Icon } from "@iconify/react";
interface ContactTeamCardProps {
  name: string;
  rol: string;
  description: string;
  social: Array<{
    iconName: string;
    url: string;
  }>;
}

export const ContactTeamCard = ({
  name,
  rol,
  description,
  social,
}: ContactTeamCardProps) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-md">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <h4 className="text-gray-500 font-semibold mt-2">{rol}</h4>
      </div>
      <div className="mt-4">{description}</div>
      <div className="mt-12">
        <div className="text-gray-500 font-semibold">Social</div>
        <div className="flex flex-wrap justify-start mt-2">
          {social.map(({ iconName, url }) => (
            <a key={iconName} className="mr-8 mt-2" href={url}>
              <Icon
                icon={`ant-design:${iconName}-outlined`}
                style={{ fontSize: "24px", color: "#6778FF" }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
