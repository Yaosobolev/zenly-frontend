import { motion } from "framer-motion";

type ShareButtonProps = {
  link: number;
  isCollapsed: boolean;
};

export const ShareButton: React.FC<ShareButtonProps> = ({
  link,
  isCollapsed,
}) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "ID пользователя",
          text: "Поделитель своим ID",
          url: `${link}`,
        })
        .then(() => console.log("Репост успешно выполнен"))
        .catch((error) => console.error("Ошибка репоста:", error));
    } else {
      // Если браузер не поддерживает API Share, можно отобразить обычное всплывающее окно
      alert("К сожалению, ваш браузер не поддерживает функцию репоста.");
    }
  };

  const animationSequence = isCollapsed ? { opacity: 1 } : { opacity: [0, 1] };
  return (
    <motion.button
      initial={{ opacity: 1 }}
      animate={animationSequence}
      transition={{ duration: 1, delay: isCollapsed ? 0 : 0.25 }}
      onClick={handleShare}
      className="text-sm border rounded-full px-2 bg-slate-300"
    >
      ID-{link}
    </motion.button>
  );
};
