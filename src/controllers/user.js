const getAllusers = (req, res) => {
    const data = [
        {
          "id": "aqbbx1vj1lqrtv3y0",
          "name": "Violet Lowe",
          "age": 19,
          "mark": 6.1,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hcm"
        },
        {
          "id": "aqbbx1vj1lqrtv3y1",
          "name": "Colton Gerhold",
          "age": 18,
          "mark": 8.4,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761
        },
        {
          "id": "aqbbx1vj1lqrtv3y2",
          "name": "Eda Schoen",
          "age": 25,
          "mark": 4.2,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "dn"
        },
        {
          "id": "aqbbx1vj1lqrtv3y3",
          "name": "Melody Kihn",
          "age": 25,
          "mark": 6.4,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "pt"
        },
        {
          "id": "aqbbx1vj1lqrtv3y4",
          "name": "Arjun Predovic",
          "age": 21,
          "mark": 9.4,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "pt"
        },
        {
          "id": "aqbbx1vj1lqrtv3y5",
          "name": "Terrill Price",
          "age": 23,
          "mark": 3.7,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hn"
        },
        {
          "id": "aqbbx1vj1lqrtv3y6",
          "name": "Jadon Goyette",
          "age": 23,
          "mark": 8.4,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "pt"
        },
        {
          "id": "aqbbx1vj1lqrtv3y7",
          "name": "Aliya Koepp",
          "age": 21,
          "mark": 6.2,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "dn"
        },
        {
          "id": "aqbbx1vj1lqrtv3y8",
          "name": "Jarrell Feest",
          "age": 25,
          "mark": 7.1,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "dn"
        },
        {
          "id": "aqbbx1vj1lqrtv3y9",
          "name": "Nestor Zulauf",
          "age": 18,
          "mark": 5.8,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hn"
        },
        {
          "id": "aqbbx1vj1lqrtv3ya",
          "name": "Zaria Little",
          "age": 24,
          "mark": 9.8,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hn"
        },
        {
          "id": "aqbbx1vj1lqrtv3yb",
          "name": "Sedrick Strosin",
          "age": 25,
          "mark": 8.7,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "dn"
        },
        {
          "id": "aqbbx1vj1lqrtv3yc",
          "name": "Brook Ritchie",
          "age": 25,
          "mark": 6,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hn"
        },
        {
          "id": "aqbbx1vj1lqrtv3yd",
          "name": "Hyman Kuhic",
          "age": 27,
          "mark": 6.8,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "dn"
        },
        {
          "id": "aqbbx1vj1lqrtv3ye",
          "name": "Melissa Dietrich",
          "age": 18,
          "mark": 9.4,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hcm"
        },
        {
          "id": "aqbbx1vj1lqrtv3yf",
          "name": "Esperanza Bauch",
          "age": 25,
          "mark": 7.2,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "pt"
        },
        {
          "id": "aqbbx1vj1lqrtv3yg",
          "name": "Kelly Mante",
          "age": 19,
          "mark": 4.1,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "dn"
        },
        {
          "id": "aqbbx1vj1lqrtv3yh",
          "name": "Adrianna Kub",
          "age": 22,
          "mark": 9,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hcm"
        },
        {
          "id": "aqbbx1vj1lqrtv3yi",
          "name": "Mercedes Treutel",
          "age": 25,
          "mark": 4.1,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hn"
        },
        {
          "id": "aqbbx1vj1lqrtv3yj",
          "name": "Javier Parisian",
          "age": 27,
          "mark": 6.1,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hn"
        },
        {
          "id": "aqbbx1vj1lqrtv3yk",
          "name": "Odie Anderson",
          "age": 21,
          "mark": 7.2,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hn"
        },
        {
          "id": "aqbbx1vj1lqrtv3yl",
          "name": "Edythe Corkery",
          "age": 18,
          "mark": 6.4,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "pt"
        },
        {
          "id": "aqbbx1vj1lqrtv3ym",
          "name": "Myrtis Graham",
          "age": 26,
          "mark": 3.4,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "pt"
        },
        {
          "id": "aqbbx1vj1lqrtv3yn",
          "name": "Alivia Funk",
          "age": 18,
          "mark": 8,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hcm"
        },
        {
          "id": "aqbbx1vj1lqrtv3yo",
          "name": "Elena Kohler",
          "age": 20,
          "mark": 7.2,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761
        },
        {
          "id": "aqbbx1vj1lqrtv3yp",
          "name": "Daron Stokes",
          "age": 26,
          "mark": 5.1,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "dn"
        },
        {
          "id": "aqbbx1vj1lqrtv3yq",
          "name": "Orval Abbott",
          "age": 19,
          "mark": 8.4,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hn"
        },
        {
          "id": "aqbbx1vj1lqrtv3yr",
          "name": "Bernadine Abshire",
          "age": 18,
          "mark": 5.9,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hcm"
        },
        {
          "id": "aqbbx1vj1lqrtv3ys",
          "name": "Adalberto Weissnat",
          "age": 19,
          "mark": 9.3,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hn"
        },
        {
          "id": "aqbbx1vj1lqrtv3yt",
          "name": "Blanca Hahn",
          "age": 19,
          "mark": 4.8,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761
        },
        {
          "id": "aqbbx1vj1lqrtv3yu",
          "name": "Lilian Nitzsche",
          "age": 23,
          "mark": 8.9,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "pt"
        },
        {
          "id": "aqbbx1vj1lqrtv3yv",
          "name": "Kacie Schamberger",
          "age": 20,
          "mark": 5.1,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "dn"
        },
        {
          "id": "aqbbx1vj1lqrtv3yw",
          "name": "Chelsie Legros",
          "age": 22,
          "mark": 5.9,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761
        },
        {
          "id": "aqbbx1vj1lqrtv3yx",
          "name": "Rosalyn Jacobi",
          "age": 20,
          "mark": 4,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "pt"
        },
        {
          "id": "aqbbx1vj1lqrtv3yy",
          "name": "Gustave Schuster",
          "age": 18,
          "mark": 5.5,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "dn"
        },
        {
          "id": "aqbbx1vj1lqrtv3yz",
          "name": "Muhammad Bechtelar",
          "age": 19,
          "mark": 8.5,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hn"
        },
        {
          "id": "aqbbx1vj1lqrtv3z0",
          "name": "Jesse Wolf",
          "age": 25,
          "mark": 9,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hn"
        },
        {
          "id": "aqbbx1vj1lqrtv3z1",
          "name": "Margret Murazik",
          "age": 24,
          "mark": 4.7,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hcm"
        },
        {
          "id": "aqbbx1vj1lqrtv3z2",
          "name": "Mitchel Smith",
          "age": 23,
          "mark": 4,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761
        },
        {
          "id": "aqbbx1vj1lqrtv3z3",
          "name": "Rylee Connelly",
          "age": 21,
          "mark": 7.5,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "dn"
        },
        {
          "id": "aqbbx1vj1lqrtv3z4",
          "name": "Kiera Abshire",
          "age": 27,
          "mark": 3.4,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761
        },
        {
          "id": "aqbbx1vj1lqrtv3z5",
          "name": "Abel Purdy",
          "age": 23,
          "mark": 7.3,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "pt"
        },
        {
          "id": "aqbbx1vj1lqrtv3z6",
          "name": "Destini Kuhn",
          "age": 24,
          "mark": 6.2,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hn"
        },
        {
          "id": "aqbbx1vj1lqrtv3z7",
          "name": "Nicola Nolan",
          "age": 21,
          "mark": 6.5,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hn"
        },
        {
          "id": "aqbbx1vj1lqrtv3z8",
          "name": "Raoul Marks",
          "age": 22,
          "mark": 8.1,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "pt"
        },
        {
          "id": "aqbbx1vj1lqrtv3z9",
          "name": "Gwendolyn Kemmer",
          "age": 23,
          "mark": 3.1,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hcm"
        },
        {
          "id": "aqbbx1vj1lqrtv3za",
          "name": "Jaylon Herman",
          "age": 23,
          "mark": 4.5,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "dn"
        },
        {
          "id": "aqbbx1vj1lqrtv3zb",
          "name": "Jayme Schaden",
          "age": 26,
          "mark": 6.5,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "dn"
        },
        {
          "id": "aqbbx1vj1lqrtv3zc",
          "name": "Adalberto Bailey",
          "age": 23,
          "mark": 6.7,
          "gender": "male",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "dn"
        },
        {
          "id": "aqbbx1vj1lqrtv3zd",
          "name": "Laney Nader",
          "age": 19,
          "mark": 6,
          "gender": "female",
          "createdAt": 1703926533761,
          "updatedAt": 1703926533761,
          "city": "hn"
        }
      ];
    return res.send(data)
}

module.exports= {getAllusers}