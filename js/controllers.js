app.controller("appController", function appController($scope) {

        $scope.comida = [{
                nombre: "Kimchi,",
                descripcion: "Elaborada con vegetales y condimentos variados que luego se fermentan para obtener propiedades beneficiosas",
                precio: "180"
            },
            {
                nombre: "Bulgogi",
                descripcion: "Ternera marinada cortada en finas tiras que posteriormente se cocinarán, preferentemente a la parrilla",
                precio: "200"
            }
        ]
    })
    //route params es para identificar los segmentos de la url
app.controller("infoController", function infoController($scope, $routeParams) {
    $scope.plato = $scope.comida[$routeParams.id];
});

//creamos el controlador addController para guardar platos nuevos con push
app.controller("addController", function addController($scope, $location) {
    $scope.textButton = "Añadir al menu";
    $scope.plato = {};
    $scope.newUser = function() {
        $scope.comida.push($scope.plato);
        $location.url("/");
    }
})

app.controller("editController", function editController($scope, $routeParams, $location) {
    //obtenemos el plato a editar con routeParams
    $scope.textButton = "Editar menu";
    $scope.plato = $scope.comida[$routeParams.id];
    $scope.editUser = function() {
        //actualizamos la información  con la id que lleva $routeParams
        $scope.comida[$routeParams.id] = $scope.plato;
        $location.url("/");
    }
})


app.controller("removeController", function removeController($scope, $routeParams, $location) {
    $scope.plato = $scope.comida[$routeParams.id];
    $scope.removeUser = function() {
        //con splice  eliminamos un plato del array, en este caso le decimos que debe eliminar 
        //el que tenga el id que le pasamos con $routeParams, y con el 1, le decimos que sólo 
        //debe eliminar 1, la función splice, como primer parámetro necesita la posición, que en este caso
        //es la id, y el segundo debe ser el número de elementos a eliminar
        $scope.comida.splice($routeParams.id, 1);
        $location.url("/");
    }
})