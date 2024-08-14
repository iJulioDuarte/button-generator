import { Modal } from "@/components/ui/modal";
import { useButtonConfigs } from "@/context/use-button-configs";
import { ValidConfigs } from "./types";
export const CodeModal = (props: {
  isOpenCodeModal: boolean;
  setIsOpenCodeModal(newValue: boolean): void;
}) => {
  const { isOpenCodeModal, setIsOpenCodeModal } = props;

  const configs = useButtonConfigs();

  const getValidConfigs = () => {
    const validConfigs: Partial<ValidConfigs> = {};

    Object.keys(configs).forEach((key) => {
      const keyAsKeyof = key as keyof typeof configs;

      if (
        !configs[keyAsKeyof] ||
        typeof configs[keyAsKeyof] === "function" ||
        keyAsKeyof === "label"
      )
        return;

      validConfigs[key as keyof ValidConfigs] = configs[keyAsKeyof];
    });

    return Object.keys(validConfigs).map((key, index) => {
      return (
        <span className="flex">
          <span className="text-blue-300">{key}</span>:{" "}
          <span className="text-green-200 pl-1">
            {typeof validConfigs[key as keyof ValidConfigs] === "number"
              ? validConfigs[key as keyof ValidConfigs]
              : `"${validConfigs[key as keyof ValidConfigs]}"`}
            {index !== Object.keys(validConfigs).length - 1 && ","}
          </span>
        </span>
      );
    });
  };

  const validConfigs = getValidConfigs();

  return (
    <Modal
      onHide={() => setIsOpenCodeModal(false)}
      title={"Gerar código"}
      open={isOpenCodeModal}
    >
      <div className="flex flex-col gap-1 max-w-full">
        <span className="text-zinc-600 flex font-bold flex-col">
          <div>
            <span className="text-blue-600">
              <span className="text-zinc-600">{"<"}</span>button
            </span>
          </div>
          <span className="ml-4">
            {"style={{"}{" "}
            {<span className="flex flex-col ml-4">{validConfigs}</span>}
            <span>{"}}"}</span>
            <span>{">"}</span>
            {configs.label && (
              <span className="text-white font-normal">{configs.label}</span>
            )}
            <span>
              <span>{"</"}</span> <span className="text-blue-600">button</span>
            </span>
            <span>{">"}</span>
          </span>
        </span>
      </div>
    </Modal>
  );
};
