export default function () {

  this.namespace = '/api';
  let books = [{
    type: 'books',
    id: 'book1',
    attributes: {
      title: 'Eat Pray Love',
      author: 'Elizabeth Gilbert',
      image: 'assets/images/Eat,_Pray,_Love_–_Elizabeth_Gilbert,_2007.jpg',
      type: 'Romance',
      price: 20
    }
  }, {
    type: 'books',
    id: 'book2',
    attributes: {
      title: 'Puterea magica a gandului',
      author: 'David J. Schwartz',
      image: 'assets/images/puterea-magica-a-gandului.jpg',
      type: 'Psychology',
      price: 25
    }
  }, {
    type: 'books',
    id: 'book3',
    attributes: {
      title: 'Unsprezece Minute',
      author: 'Paulo Coelho',
      image: 'assets/images/Unsprezece-minute-de-Paulo-Coelho.jpg',
      type: 'Romance',
      price: 35
    }
  }];

  this.get('/books', function (db, request) {
    if (request.queryParams.title !== undefined) {
      let filteredResults = books.filter(function (i) {
        return i.attributes.title.toLowerCase().indexOf(request.queryParams.title.toLowerCase()) !== -1;
      });
      return {data: filteredResults};
    } else {
      return {data: books}
    }
  });


  this.get('/books/:id', function (db, request) {
    return { data: books.find((book) => request.params.id === book.id) };
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

  this.get('/productions', function () {
    return {
      data: [{
        id: "prod1",
        type: "production",
        attributes: {
          name: "Books",
          description:"This is the books description",
          price: 20
        }
      },
        {
          id: "prod2",
          type: "production",
          attributes: {
            name: "Movies",
            price: 30,
            description:"sdfafsfga"
          }
        },
        {
          id: "prod3",
          type: "production",
          attributes: {
            name: "Cookies",
            price: 25,
            description:"sfsdfasgageth"
          }
        },
        {
          id: "prod4",
          type: "production",
          attributes: {
            name: "Dresses",
            price: 25,
            description: "sfgrth rget "
          }
        }]
    }

  });

}
