## html

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="raccoon-decorative.css">
  <link rel="stylesheet" href="style.css">
  <title>Неопознанный енот</title>
</head>
<body>
  <article class="raccoon-card">
    <h1 class="name">Неопознанный Енот</h1>
    <img class="avatar" src="img/raccoon.svg" alt="Неопознанный Енот" width="100" height="100">
    <a class="phone" href="tel:+71234567890">+7 123 456 78 90</a>
    <a class="email" href="mailto:raccoon@htmlacademy.ru">raccoon@htmlacademy.ru</a>
    <section class="skills">
      <h2 class="skills-title">Навыки:</h2>
      <ul class="skills-list">
        <li class="skills-item">Быстро и качественно верстаю на HTML и CSS,</li>
        <li class="skills-item">умею работать с JavaScript,</li>
        <li class="skills-item">знаю основы PHP,</li>
        <li class="skills-item">использую Git.</li>
      </ul>
    </section>
    <img class="qr" src="img/QR.svg" alt="QR код" width="100" height="100">
  </article>
</body>
</html>
```

## css

```css
.raccoon-card {
  width: 490px;
  padding: 20px;
  display: grid;
  grid-template-columns: 100px 200px 150px;
  grid-template-areas:"avatar name name"
  "avatar email phone"
  "skills skills qr";
  gap: 20px;
  }
  
  .avatar {
    grid-area: avatar;
  }
  
  .name {
    grid-area: name;
    align-self: end;
  }
  
  .email {
    grid-area: email;
  }
  
  .phone {
    grid-area: phone;
  }
  
  .skills {
    grid-area: skills;
  }
  
  .qr {
    width: 100px;
    grid-area: qr;
    align-self: end;
    justify-self: end;
  }
  
  ```
