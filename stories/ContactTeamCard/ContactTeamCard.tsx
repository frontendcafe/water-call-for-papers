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
    <div className="flex flex-col justify-between max-w-sm p-6 bg-gray-100 rounded-lg">
      <div>
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <h4 className="mt-1 text-lg font-semibold text-secondary-500">
            {rol}
          </h4>
        </div>
        <div className="mt-4 text-secondary-800">{description}</div>
      </div>
      <div className="mt-12">
        <div className="font-semibold text-secondary-600">Social</div>
        <div className="flex flex-wrap justify-start mt-2">
          {social.map(({ iconName, url }) => (
            <a key={iconName} className="mt-2 mr-8" href={url}>
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
