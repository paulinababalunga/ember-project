export default function () {

  this.namespace = '/api';

  this.get('/books', function () {
    return {
      data: [{
        type: 'books',
        id: 'book1',
        attributes: {
          title: 'Eat Pray Love',
          author: 'Elizabeth Gilbert',
          image: 'assets/images/Eat,_Pray,_Love_–_Elizabeth_Gilbert,_2007.jpg',
          type: 'Romance'
        }
      }, {
        type: 'books',
        id: 'book2',
        attributes: {
          title: 'Puterea magica a gandului',
          author: 'David J. Schwartz',
          image: 'assets/images/puterea-magica-a-gandului.jpg',
          type: 'Psychology'
        }
      }, {
        type: 'books',
        id: 'book3',
        attributes: {
          title: 'Unsprezece Minute',
          author: 'Paulo Coelho',
          image: 'assets/images/Unsprezece-minute-de-Paulo-Coelho.jpg',
          type: 'Romance'
        }
      }]
    }
  });

  this.get('/movies', function () {
    return {
      data: [{
        type: 'movies',
        id: 'movie1',
        attributes: {
          title: 'Everything everything',
          type: 'Romance',
          image: 'assets/images/everything.jpg'
        }
      }, {
        type: 'movies',
        id: 'movie2',
        attributes: {
          title: 'Titanic',
          type: 'Romance',
          image: 'assets/images/titanic.jpg'
        }
      }, {
        type: 'movies',
        id: 'movie3',
        attributes: {
          title: 'The Wow',
          type: 'Romance',
          image: 'assets/images/wow.jpg'
        }
      }, {
        type: 'movies',
        id: 'movie4',
        attributes: {
          title: 'The Notebook',
          type: 'Romance',
          image: 'assets/images/notebook.jpg'
        }
      }]
    }
  });
}
