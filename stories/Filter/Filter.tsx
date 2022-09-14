import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { TagProps } from "../Tag/Tag";
import { TagList } from "../TagList/TagList";
interface FilterProps {
  tags: TagProps[];
}
export const Filter = ({ tags }: FilterProps) => {
  const [visible, inVisible] = useState(false);

  const eventClick = () => {
    inVisible(!visible);
  };
  const clear = () => {};

  const accept = () => {};
  return (
    <Menu as="div" className="bg-slate-50 w-screen p-4 md:w-72">
      <div className="flex flex-col font-semibold">
        <Menu.Button className="absolute invisible md:visible md:relative">
          <div className="flex gap-1">
            <Icon iconName="adjustment" size="small" />
            <small>Filtros</small>
            <Icon iconName="arrowDown" size="small" />
          </div>
        </Menu.Button>
        <div className=" md:absolute md:invisible">
          <div className="flex justify-between">
            <Menu.Button onClick={eventClick}>Filtro</Menu.Button>
            {visible ? <Icon iconName="xMark" size="small" /> : <></>}
          </div>
        </div>
      </div>
      <Transition>
        <Menu.Items className="h-screen divide-y divide-gray-100 md:h-72">
          <Menu.Item>
            <div className="py-2 font-semibold">
              <h3 className="text-sm">Ordenar:</h3>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="py-2 font-semibold">
              <h3 className="text-sm pb-3">Tema:</h3>
              <TagList tags={tags} />
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="py-2 font-semibold">
              <h3 className="text-sm pb-3">Formato:</h3>
              <TagList tags={tags} />
            </div>
          </Menu.Item>
        </Menu.Items>
        <div className="flex justify-between md:absolute md:invisible ">
          <Button size="small" variant="transparent" onClick={clear}>
            Limpiar filtros{" "}
          </Button>
          <Button size="small" onClick={accept}>
            Aplicar (n){" "}
          </Button>
        </div>
      </Transition>
    </Menu>
  );
};
