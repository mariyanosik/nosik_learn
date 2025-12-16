## html

```<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="dashboard-decorative.css">
  <link rel="stylesheet" href="style.css">
  <title>Панель управления</title>
</head>
<body>
  <main class="dashboard">
    <h1 class="visually-hidden">Панель управления</h1>
    <ul class="tabs-list">
      <li class="tab"><a class="tab-link charts" href="#">Графики</a></li>
      <li class="tab"><a class="tab-link clients" href="#">Клиенты</a></li>
      <li class="tab active"><a class="tab-link messages" href="#">Сообщения</a></li>
      <li class="tab"><a class="tab-link documents" href="#">Документы</a></li>
      <li class="tab"><a class="tab-link projects" href="#">Проекты</a></li>
      <li class="tab"><a class="tab-link settings" href="#">Настройки</a></li>
      <li class="tab"><a class="tab-link trash" href="#">Корзина</a></li>
    </ul>
    <section class="content">
      <h2 class="title">Биткоин подорожал!</h2>
      <div class="author">
        <img class="author-avatar" src="img/unknown-raccoon.svg" alt="Неопознанный Енот" width="32" height="32">
        <span class="author-name">Неопознанный Енот</span>
      </div>
      <img class="image" src="img/bitcoin_chart.png" alt="График стоимости биткоина" width="576" height="256">
      <p class="message">Босс, если продать сейчас, сможем запастись тунцом на пять лет!</p>
      <a class="reply-link" href="#">Ответить</a>
    </section>
  </main>
</body>
</html>
```

## css

```
.tabs-list {
  margin: 0;
  padding: 0;
  width: 180px;
}

.tab {
 margin-top: 0;
 margin-bottom: 15px;
}

.tab:nth-child(7) {
  margin-bottom: 0;
}

.active {
  margin-left: auto;
}

.content {
  width: 280px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.author {
  order: -2;
  align-self: flex-start;
  margin-bottom: 15px;
}

.image {
  order: -1;
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
  }


.title {
  order: 0;
  margin-top: 0;
  margin-bottom: 5px;
}

.message {
  order: 1;
  margin-top: 0;
  margin-bottom: 20px;
}

.reply-link {
  order: 2;
}
```
