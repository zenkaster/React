import React, { useEffect, useState } from 'react'
import PostList from './components/PostList';

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Как научиться программировать за 21 день', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium metus quis justo luctus, at sagittis odio hendrerit. Vivamus id purus enim.' },
    { id: 2, title: 'Секреты успешного предпринимателя', body: 'Praesent a vestibulum dui. Quisque eget volutpat ipsum, vel venenatis mi. Curabitur ullamcorper, elit sit amet lacinia tristique.' },
    { id: 3, title: 'Путешествие в страну чудес', body: 'Nullam ullamcorper sem nec metus interdum, at auctor quam interdum. Fusce sed felis nec ligula pulvinar feugiat.' },
    { id: 4, title: 'Что такое искусственный интеллект и зачем он нужен', body: 'Maecenas ut mollis nulla, nec egestas metus. Proin auctor lacus in odio aliquet, vel eleifend dolor elementum.' },
    { id: 5, title: 'Как готовить вкусные блюда в домашних условиях', body: 'Suspendisse consectetur odio ac ligula venenatis finibus. Sed nec diam nec ligula cursus feugiat.' },
    { id: 6, title: 'Исследование о влиянии социальных сетей на молодежь', body: 'Quisque accumsan efficitur libero, eu feugiat nulla. In efficitur, leo at facilisis fringilla, ligula nisl consectetur libero.' },
    { id: 7, title: 'Как сохранить психологическое равновесие в стрессовых ситуациях', body: 'Donec vitae sem sit amet lorem tincidunt tempus. Integer rhoncus, purus vel posuere vehicula, felis orci consectetur lectus.' },
    { id: 8, title: 'Тайны древних цивилизаций: что скрывают пирамиды Египта', body: 'Aenean vehicula nibh odio, sit amet elementum velit tincidunt in. Fusce et felis vel felis malesuada finibus.' },
    { id: 9, title: 'Как стать профессиональным спортсменом: секреты тренировок', body: 'Vivamus ut neque suscipit, scelerisque velit non, sollicitudin neque. Morbi eleifend dapibus orci, nec consectetur est dictum non.' },
    { id: 10, title: 'Рецепты здорового образа жизни: как избежать болезней', body: 'Pellentesque et neque odio. Cras eleifend lacus sed est tempor eleifend. Nullam quis est justo.' },
  ]);

  let lat;
  let lon;


  return (
    <div>
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  )
}
