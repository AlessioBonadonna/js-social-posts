// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3- Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS
//  1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
//  3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
const container=document.getElementById('container')
container.classList.add('posts-list');
function creaElementi(postContainer){
    //creo Post 
    let post = document.createElement('div');
    post.classList('post');
    //sottoclasse di post =post__header
    let postHeader=document.createElement('div');
    postHeader.classList("post__header");
    post.appendChild(postHeader);
    //sottoclasse post__header =post-meta__icon
    let postMetaIcon=document.createElement('div');
    postMetaIcon.classList('post-meta__icon');
    postHeader.appendChild(postMetaIcon);
    
    //img di profilo figlia di post-meta__icon
    //ma bisogna verificare che ci sia questa img 
    if (postContainer.author.image !== null) {
        const postImageMini = document.createElement('img');
        postImageMini.classList.add('profile-pic');
        postImageMini.src = postContainer.author.image;
        postImageMini.alt = `image profile of ${postContainer.author.name}`
        postMetaIcon.appendChild(postImageMini);
    } else {
        const splitName = postContainer.author.name.split(' ');
        const iniziali = splitName[0].charAt(0).toUpperCase() + splitName[1].charAt(0).toUpperCase();
        const profilePicDefault = document.createElement('h3');
        profilePicDefault.classList.add('profile-pic-default');
        profilePicDefault.innerHTML = iniziali;
        postMetaIcon.appendChild(profilePicDefault);
    }
    // post Header --> meta data ---> nome e cognome + tempo;
    let postMetaData=document.createElement('div');
    postMetaData.classList('post-meta__data');
    postHeader.appendChild(postMetaData);
    //meta data -->nome & Cognome 
    let postMetaAuthor=document.createElement('div');
    postMetaAuthor.classList('post-meta__author');
    postMetaAuthor.innerHTML=postContainer.author.name;
    postMetaData.appendChild(postMetaAuthor);
//meta data --> tempo 
    //Bonus data in EU 
    //new Date(toLocaleDateString("... eu-EU") );
    let postMetaTime=document.createElement('div');
    postMetaTime.classList('post-meta__time');
    postMetaTime.innerHTML=new Date (postContainer.created).toLocaleDateString("eu-EU");
    postMetaData.appendChild(postMetaTime);

   let postText=document.createElement('div') ;
   postText.classList('post__text');
   postText.innerHTML=postContainer.content;
   post.appendChild(post);

   //post img sezione principale 
   let postImagine=document.createElement(div);
   postImagine.classList.add("post__imagine");
   post.appendChild(postImagine);

   let imgPostPrincipale=document.createElement('img');
   imgPostPrincipale.src=postContainer.media;
   imgPostPrincipale.alt=random;
   postImagine.appendChild(imgPostPrincipale);
//sezione con i bottoni 
let postFooter=document.createElement('div');
postFooter.classList("post_footer");
post.appendChild(postFooter);

}