    let niz = [];

    let preuredi = (Zmin, Zmax, duzinaNiza, ...niz) => {
        let noviNiz = [...niz];
        for (let i = 0; i < duzinaNiza / 2; i++) {
            return [...noviNiz.filter(element => element > Zmin && element < Zmax)];
        }
    }
    console.log(preuredi(2, 5, 6, 1, 2, 3, 4, 5, 6));
    //radi