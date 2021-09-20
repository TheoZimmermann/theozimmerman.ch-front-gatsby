export const ContentsList = ({ items }) => (
    <ul>
        {items.map((item) => <ContentsItem key={`${item.url}-item`} item={item} />)}
    </ul>
);

const ContentsItem = ({ item }) => (
    <li>
        <a href={item.url}>{item.title}</a>
        {item.items && item.items.length && (
            <ContentsList key={`${item.url}-list`} items={item.items} />
        )}
    </li>
);
