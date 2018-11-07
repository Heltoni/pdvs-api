module.exports = {

    getAll: function (app, req, res) {

        const pdvId = req.params.id;
        const query = "SELECT DISTINCT Id as id, TradingName as tradingName, OwnerName as ownerName, Document as document, ST_AsGeoJSON(Address) as address, ST_AsGeoJSON(CoverageArea) as coverageArea FROM pdv ORDER BY 1 ASC ";

        app.datasource.query(query, [pdvId], (err, rows, fields) => {

            if (err) {
                console.log(err.message);
                res.sendStatus(500);
                return;
            }

            res.json(rows);
        });

    },
    getById: function (app, req, res) {

        const pdvId = req.params.id;
        const query = "SELECT Id as id, TradingName as tradingName, OwnerName as ownerName, Document as document, ST_AsGeoJSON(Address) as address, ST_AsGeoJSON(CoverageArea) as coverageArea FROM pdv WHERE Id = ?";

        app.datasource.query(query, [pdvId], (err, rows, fields) => {

            if (err) {
                console.log(err.message);
                res.sendStatus(500);
                return;
            }

            res.json(rows);
        });

    },
    getByCoordinates: function (app, req, res) {

        const lng = req.params.lng;
        const lat = req.params.lat;

        var query = "SELECT Id as id, TradingName as tradingName, OwnerName as ownerName, Document as document, ST_AsGeoJSON(Address) as address, ST_AsGeoJSON(CoverageArea) as coverageArea FROM pdv p ";
        query = query + "where ST_Contains(p.coverageArea, ST_GeomFromText('Point(" + lng + " " + lat + ")',4326)) = true ";
        query = query + "or touches(ST_GeomFromText('Point(" + lng + " " + lat + ")',4326), p.coverageArea) = true ";
        query = query + "order by distance(ST_GeomFromText('Point(" + lng + " " + lat + ")',4326), p.address) LIMIT 1; "

        console.log(query);

        app.datasource.query(query, (err, rows, fields) => {
            if (err) {
                console.log(err.message);
                res.sendStatus(500);
                return;
            }

            res.json(rows);
        });

    },
    postPdv: function (app, req, res) {
        
        const id = req.query.id;
        const tradingName = req.query.tradingName;
        const ownerName = req.query.ownerName;
        const document = req.query.document;
        const address = req.query.address;
        const coverageArea = req.query.coverageArea;



        if(id == null || tradingName == null || ownerName == null || document == null || address == null || coverageArea == null)
        {
            res.json({ message: 'Todos os campos são obrigatórios' });
        }    


    
        var query = "insert into pdv(Id, TradingName, OwnerName, Document, Address, CoverageArea ) ";
        query = query + "values("+ id +", '"+ tradingName +"', '"+ ownerName +"', '"+ document +"', ST_GeomFromGeoJSON('"+address+"'), ST_GeomFromGeoJSON('"+coverageArea+"'))";
         
        
        
        app.datasource.query(query, (err, rows, fields) => {
            if(err){


                if(err.message.indexOf('Duplicate entry') > -1) 
                {
                    if(err.message.indexOf('PRIMARY') > -1) res.json({ message: 'Id já cadastrado para um Ponto de Venda' });
                    else if(err.message.indexOf('Document') > -1) res.json({ message: 'Documento já cadastrado para um Ponto de Venda' });
                }
                else
                {
                    res.sendStatus(500);
                    res.end;
                    return;
                }

            }
            else
            {
                res.sendStatus(200);
            }   
        });
        
        return; 
    }

};




