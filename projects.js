// Projects

const projects = [
    {
        name: 'DOIMUKH ',
        type: 'RG-UNI',
        pos: 'start',
        image: './assets/img1.jpeg' 
    },
    {
        name: 'PICNIC',
        type: '6TH SEM',
        pos: 'mid',
        image: './assets/img2.jpeg' 

    },
    {
        name: 'NLC',
        type: 'COLLEGE-GROUND',
        pos: 'end',
        image: './assets/29.jpeg' 
    },
    {
        name: 'COLLEGE',
        type: "MOUSUMI MA'AM B-DAY ",
        pos: 'mid',
        image: './assets/10.jpeg' 
    },
    {
        name: 'DOIMUKH',
        type: 'RG-UNI',
        pos: 'end',
        image: './assets/16.jpeg' 
    },
    {
        name: 'COLLEGE',
        type: 'FAREWELL',
        pos: 'mid',
        image: './assets/30.jpeg' 

        
    },
    {
        name: 'COLLEGE',
        type: 'MENSSSSSSSSS',
        pos: 'start',
        image: './assets/22.jpeg' 
    },
    {
        name: 'NLC',
        type: 'CLASSROOM',
        pos: 'end',
        image: './assets/18.jpeg' 
    },

]

const createProjects = () => {
    projects.forEach(project => {
        let panel = document.createElement('div');
        panel.classList.add('project', `${project.pos}`);

        let imageContainer = document.createElement('div');
        imageContainer.className = `image__container`;

        let image = document.createElement('img');
        image.classList.add('project__image');
        image.src = project.image;

        let projectDetails = document.createElement('div');
        projectDetails.classList.add('project__details');

        let projectTitle = document.createElement('p');
        projectTitle.innerText = project.name;

        let projectType = document.createElement('p');
        projectType.innerText = project.type;

        projectDetails.append(projectTitle, projectType)

        imageContainer.appendChild(image);
        panel.append(imageContainer, projectDetails);

        document.querySelector('.projects__slider').appendChild(panel);
    })

}


// Blog posts

const blogPosts = [
    {
        title: 'DOIMUKH',
        time: 'RG-UNIVERSITY', 
        image: './assets/14.jpeg' 
    },
    {
        title: 'NLC',
        time: 'COLLEGE-GROUND', 
        image: './assets/49.jpeg' 
    },
    {
        title: 'CLASSROOM',
        time: 'TEACHERS-DAY',
        image: './assets/13.jpeg' 
        
    },
    {
        title: 'OKKKKKKKKK',
        time: 'SEE YOU SOON!!!!',
        image: './assets/15.jpeg' 
        
    }
]

const createBlogposts = () => {
    blogPosts.forEach(post => {
        let blogPostSection = document.createElement('div');
        blogPostSection.classList.add('blog__post');

        let postDiv = document.createElement('div');
        postDiv.classList.add('post');

        let imageContainer = document.createElement('div');
        imageContainer.classList.add('post__image__container');

        let image = document.createElement('img');
        image.classList.add('blog__post__img');
        image.src = post.image;

        let postDetails = document.createElement('div');
        postDetails.classList.add('post__details');

        let postTitle = document.createElement('p');
        postTitle.innerText = post.title;

        let postTime = document.createElement('p');
        postTime.innerText = post.time;

        imageContainer.appendChild(image);
        postDetails.append(postTitle, postTime);
        postDiv.append(imageContainer, postDetails)
        blogPostSection.appendChild(postDiv);

        document.getElementById('blog').appendChild(blogPostSection)

    })
}



export {
    createProjects,
    createBlogposts
}