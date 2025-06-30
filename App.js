const heading = React.createElement('h1', {id: "heading"}, 'Hello, World!123');

const parent = React.createElement('div', {id : "parent"}, 
    [React.createElement('div', {id: "child1"}, 
        [React.createElement('h1', {id: "subchild1"}, 'Subheading 1'),
         React.createElement('h2', {id: "subchild2"}, 'Subheading 2')]),
     React.createElement('div', {id: "child1"}, 
        [React.createElement('h1', {id: "subchild1"}, 'Subheading 1'),
         React.createElement('h2', {id: "subchild2"}, 'Subheading 2')]),   
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);