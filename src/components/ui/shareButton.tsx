const ShareButton = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Заголовок вашего репоста",
          text: "Описание вашего репоста",
          url: "link",
        })
        .then(() => console.log("Репост успешно выполнен"))
        .catch((error) => console.error("Ошибка репоста:", error));
    } else {
      // Если браузер не поддерживает API Share, можно отобразить обычное всплывающее окно
      alert("К сожалению, ваш браузер не поддерживает функцию репоста.");
    }
  };

  return <button onClick={handleShare}>Поделиться</button>;
};

export default ShareButton;
