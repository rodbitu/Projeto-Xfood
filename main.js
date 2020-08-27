        alert("Oi :D");


        var carrinho = [

            [0,0,0,0,0,0,0,0],
            [50,50,50,50,50,50,50,50],
            [0,0,0,0,0,0,0,0]

            

        ];



        var quantidade = carrinho[1][0]+carrinho[1][1]+carrinho[1][2]+carrinho[1][3]+carrinho[1][4]+carrinho[1][5]+carrinho[1][6]+carrinho[1][7]


        //Sessao frutas

        alert("Por favor escolha somente 45 itens!")

        alert("Bem vindo a sessao de frutas")

        while (46 < carrinho[1][0] && z != "X") {
                        
                var z = prompt("Voce quer comprar frutas?\n Digite:\n A para sim \n X para nao");

                if (z == "A") {
                    
                    var y = prompt("Na sessao de frutas temos:\nBanana R$3.50 e temos 12 unidades disponiveis.\nMaca R$0.68 e temos 30 unidades disponiveis.\nUva R$1.99 e temos 58 unidades disponiveis.\nVoce quer qual?"); 

                    if (y == "maca"|| y == "Maca") {

                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 30) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][0] = " Maca. "
                        carrinho[1][0] = y
                        carrinho[2][0] = y*0.68
                        alert("Compra feita!");

                    }else if(y == "banana" || y == "Banana"){

                                        
                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 12) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][0] = " Banana."
                        carrinho[1][0] = y
                        carrinho[2][0] = y*3.5
                        alert("Compra feita!");


                    }else if(y == "uva" || y == "Uva"){

                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 58) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][0] = " Uva."
                        carrinho[1][0] =  y
                        carrinho[2][0] = y*1.99
                        alert("Compra feita!");

                    }else{}

                } else {
                    carrinho[1][0] = 0
                }

                if (46 < carrinho[1][0]) {
                        
                    alert("Opa,so pode 45 itens por sessao.");

                } else {}
                
        }    
            
        alert("Ok,vamos para a sessao de verduras!");

        //Sessao verduras

        while (46 < carrinho[1][1] && x != "X") {
                        
                var x = prompt("Voce quer comprar verduras?\n Digite:\n A para sim \n X para nao");

                if (x == "A") {
                    
                    var y = prompt("Na sessao de verduras temos:\nAlface R$2.00 e temos 25 unidades disponiveis.\nBrocolis R$1.5 e temos 35 unidades disponiveis.\nEspinafre R$2.4 e temos 15 unidades disponiveis.\nVoce quer qual?"); 


                    if (y == "alface"|| y == "Alface") {

                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 25) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][1] = "alface."
                        carrinho[1][1] = y
                        carrinho[2][1] = y*2
                        alert("Compra feita!");

                    }else if(y == "Brocolis" || y == "brocolis"){

                                        
                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 35) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][1] = " brocolis."
                        carrinho[1][1] = y
                        carrinho[2][1] = y*1.5
                        alert("Compra feita!");


                    }else if(y == "Espinafre" || y == "espinafre"){

                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 15) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][1] = " espinafre."
                        carrinho[1][1] =  y
                        carrinho[2][1] = y*2.4
                        alert("Compra feita!");

                    }else{}

                } else {
                    carrinho[1][1] = 0
                }
            
                if (46 < carrinho[1][1]) {
                        
                    alert("Opa,so pode 45 itens por sessao.");

                } else {}


        }    

        alert("Ok,vamos para a sessao legumes!");

        //Sessao legumes

        while (46 < carrinho[1][2] && c != "X") {
                        
                var c = prompt("Voce quer comprar legumes?\n Digite:\n A para sim \n X para nao");

                if (c == "A") {
                    
                    var y = prompt("Na sessao de legumes temos:\nFeijao R$5 e temos 18 unidades disponiveis.\nArroz R$4.5 e temos 20 unidades disponiveis.\nBatata R$3 e temos 43 unidades disponiveis.\nVoce quer qual?"); 

                    if (y == "feijao"|| y == "Feijao") {

                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 18) {
                            
                            var y = Number(prompt("Quantas unidades?"));
                        }

                        carrinho[0][2] = "feijao. "
                        carrinho[1][2] = y
                        carrinho[2][2] = y*5
                        alert("Compra feita!");

                    }else if(y == "arroz" || y == "Arroz"){

                                        
                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 20) {
                            
                            var y = Number(prompt("Quantas unidades?"));



                        }

                        carrinho[0][2] = "arroz. "
                        carrinho[1][2] = y
                        carrinho[2][2] = y*4.5
                        alert("Compra feita!");


                    }else if(y == "Batata" || y == "batata"){

                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 43) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][2] = "batata. "
                        carrinho[1][2] =  y
                        carrinho[2][2] = y*3
                        alert("Compra feita!");

                    }else{}

                    if (46 < y) {
                        
                        alert("Opa,so pode 45 itens por sessao.");

                    } else {}

                } else {
                    carrinho[1][2] = 0
                }
            
                if (46 < carrinho[1][2]) {
                        
                    alert("Opa,so pode 45 itens por sessao.");

                } else {}
        } 
            
        //Sessao proteinas
            
        while (46 < carrinho[1][3] && v != "X") {
                        
                var v = prompt("Voce quer comprar proteina?\n Digite:\n A para sim \n X para nao");

                if (v == "A") {
                    
                    var y = prompt("Na sessao de proteinas temos:\nFrango R$15 e temos 37 unidades disponiveis.\nPeixe R$10 e temos 29 unidades disponiveis.\nBife R$12 e temos 27 unidades disponiveis.\nVoce quer qual?"); 

                    if (y == "Frango"|| y == "frango") {

                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 37) {
                            
                            var y = Number(prompt("Quantas unidades?"));
                        }

                        carrinho[0][3] = "frango. "
                        carrinho[1][3] = y
                        carrinho[2][3] = y*15
                        alert("Compra feita!");

                    }else if(y == "peixe" || y == "Peixe"){

                                        
                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 29) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][3] = "peixe."
                        carrinho[1][3] = y
                        carrinho[2][3] = y*10
                        alert("Compra feita!");


                    }else if(y == "Bife" || y == "bife"){

                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 27) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][3] = "bife. "
                        carrinho[1][3] =  y
                        carrinho[2][3] = y*12
                        alert("Compra feita!");

                    }else{}

                    if (46 < y) {
                        
                        alert("Opa,so pode 45 itens por sessao.");

                    } else {}

                } else {
                    carrinho[1][3] = 0
                }
            
                if (46 < carrinho[1][3]) {
                        
                    alert("Opa,so pode 45 itens por sessao.");

                } else {}
        }





        
        //Sessao Congelados

        alert("Bem vindo a sessao de Congelados")

        while (46 < carrinho[1][4] && b != "X") {
                        
                var b = prompt("Voce quer comprar Congelados?\n Digite:\n A para sim \n X para nao");

                if (b == "A") {
                    
                    var y = prompt("Na sessao de Congelados temos:\nPizza R$8.00 e temos 15 unidades disponiveis.\nLasanha R$6.00 e temos 20 unidades disponiveis.\nPao de Queijo R$3.99 e temos 50 unidades disponiveis.\nVoce quer qual?"); 

                    if (y == "lasanha"|| y == "Lasanha") {

                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 20) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][4] = " Lasanha. "
                        carrinho[1][4] = y
                        carrinho[2][4] = y*6
                        alert("Compra feita!");

                    }else if(y == "pizza" || y == "Pizza"){

                                        
                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 15) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][4] = " Pizza."
                        carrinho[1][4] = y
                        carrinho[2][4] = y*8
                        alert("Compra feita!");


                    }else if(y == "pao de queijo" || y == "Pao de Queijo"){

                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 50) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][4] = " Pao de Queijo."
                        carrinho[1][4] =  y
                        carrinho[2][4] = y*4
                        alert("Compra feita!");

                    }else{}

                } else {
                    carrinho[1][4] = 0
                }

                if (45 < carrinho[1][4]) {
                        
                    alert("Opa,so pode 45 itens por sessao.");

                } else {}
                
        }    
            
        alert("Ok,vamos para a sessao de Bebidas!");

        //Sessao Bebidas

        while (46 < carrinho[1][5] && n != "X") {
                        
                var n = prompt("Voce quer comprar Bebidas?\n Digite:\n A para sim \n X para nao");

                if (n == "A") {
                    
                    var y = prompt("Na sessao de Bebidas temos:\nCoca-Cola R$8.00 e temos 28 unidades disponiveis.\nPepsi R$9.00 e temos 26 unidades disponiveis.\nGuarana R$9.50 e temos 20 unidades disponiveis.\nVoce quer qual?"); 


                    if (y == "coca-cola"|| y == "Coca-Cola") {

                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 28) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][5] = "Coca-Cola."
                        carrinho[1][5] = y
                        carrinho[2][5] = y*8
                        alert("Compra feita!");

                    }else if(y == "pepsi" || y == "Pepsi"){

                                        
                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 26) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][5] = " Pepsi."
                        carrinho[1][5] = y
                        carrinho[2][5] = y*9
                        alert("Compra feita!");


                    }else if(y == "guarana" || y == "Guarana"){

                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 20) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][5] = " Guarana."
                        carrinho[1][5] =  y
                        carrinho[2][5] = y*9.5
                        alert("Compra feita!");

                    }else{}

                } else {
                    carrinho[1][5] = 0
                }
            
                if (45 < carrinho[1][5]) {
                        
                    alert("Opa,so pode 45 itens por sessao.");

                } else {}


        }    

        alert("Ok,vamos para a sessao Bebidas Alcoolicas!");

        //Sessao Bebidas Alcoolicas

        while (46 < carrinho[1][6] && m != "X") {
                
            var m = prompt("Voce quer comprar Bebidas alcoolicas?\n Digite:\n A para sim \n X para nao");
    
            if (m == "A") {
                
                var y = prompt("Na sessao de bebidas alcoolicas temos:\nCatuaba R$9 e temos 6 unidades disponiveis.\nCaipirinha R$14 e temos 12 unidades disponiveis.\nSangue de Boi R$7 e temos 18 unidades disponiveis.\nVoce quer qual?"); 
    
                if (y == "catuaba"|| y == "Catuaba") {
    
                    var y = Number(prompt("Quantas unidades?"));
                    var p = 9
    
                    while (y > 6) {
                        
                        var y = Number(prompt("Quantas unidades?"));
                    }
    
                    carrinho[0][6] = "Catuaba: "
                    carrinho[1][6] = y
                    carrinho[2][6] = y*9
                    alert("Compra feita!");
    
                }else if(y == "caipirinha" || y == "Caipirinha"){
    
                                    
                    var y = Number(prompt("Quantas unidades?"));
                    var p = 14
    
                    while (y > 12) {
                        
                        var y = Number(prompt("Quantas unidades?"));
    
    
    
                    }
    
                    carrinho[0][6] = "Caipirinha. "
                    carrinho[1][6] = y
                    carrinho[2][6] = y*14
                    alert("Compra feita!");
    
    
                }else if(y == "sangue de boi" || y == "Sangue de Boi"){
    
                    var y = Number(prompt("Quantas unidades?"));
                    var p = 7
                    while (y > 18) {
                        
                        var y = Number(prompt("Quantas unidades?"));
    
                    }
    
                    carrinho[0][6] = "Sangue de Boi: "
                    carrinho[1][6] =  y
                    carrinho[2][6] = y*7
                    alert("Compra feita!");
    
                }else{}
    
                if (46 < carrinho[1][6]) {
                    
                    alert("Opa,so pode 45 itens por sessao.");
    
                } else {}
    
            } else {
                carrinho[1][6] = 0
            }
        
        }




        //Sessao Panificadora
            
        while (46 < carrinho[1][7] && r != "X") {
                        
                var r = prompt("Voce quer comprar algo da Panificadora?\n Digite:\n A para sim \n X para nao");

                if (r == "A") {
                    
                    var y = prompt("Na sessao de Panificadora temos:\nPao R$1.00 e temos 34 unidades disponiveis.\nBolo R$12.00 e temos 10 unidades disponiveis.\nMonteiro Lopes R$2.00 e temos 30 unidades disponiveis.\nVoce quer qual?"); 

                    if (y == "pao"|| y == "Pao") {

                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 34) {
                            
                            var y = Number(prompt("Quantas unidades?"));
                        }

                        carrinho[0][7] = "Pao: "
                        carrinho[1][7] = y
                        carrinho[2][7] = y*1
                        alert("Compra feita!");

                    }else if(y == "bolo" || y == "Bolo"){

                                        
                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 10) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][7] = "Bolo: "
                        carrinho[1][7] = y
                        carrinho[2][7] = y*12
                        alert("Compra feita!");


                    }else if(y == "monteiro lopes" || y == "Monteiro Lopes"){

                        var y = Number(prompt("Quantas unidades?"));

                        while (y > 30) {
                            
                            var y = Number(prompt("Quantas unidades?"));

                        }

                        carrinho[0][7] = "Monteiro Lopes: "
                        carrinho[1][7] =  y
                        carrinho[2][7] = y*2
                        alert("Compra feita!");

                    }else{}

                    if (46 < carrinho[1][7]) {
                        
                        alert("Opa,so pode 45 itens por sessao.");

                    } else {}

                } else {
                    carrinho[1][7] = 0
                }
            
        }     


        var quantidade = carrinho[1][0]+carrinho[1][1]+carrinho[1][2]+carrinho[1][3]+carrinho[1][4]+carrinho[1][5]+carrinho[1][6]+carrinho[1][7]


            if(quantidade<46){

            document.write("NOTA FISCAL <br><br>");

            //Sessao das frutas

        document.write("Sessao das frutas <br>");
        document.write("Voce comprou ",carrinho[0][0],"<br>");
        document.write("voce comprou ",carrinho[1][0]," unidade de ",carrinho[0][0],"<br><br>");
        document.write("Valor da sessao das frutas: ",carrinho[2][0]);

        //Sessao das verduras

        document.write("<br><br><br> Sessao das verduras <br>");
        document.write("Voce comprou",carrinho[0][1]," <br>");
        document.write("voce comprou ",carrinho[1][1]," unidade de ",carrinho[0][1],"<br><br>");
        document.write("Valor da sessao das verduras: ",carrinho[2][1]);

        //Sessao dos legumes

        document.write("<br><br><br> Sessao das legumes <br>");
        document.write("Voce comprou",carrinho[0][2]," <br>");
        document.write("voce comprou ",carrinho[1][2]," unidade de ",carrinho[0][2],"<br><br>");
        document.write("Valor da sessao dos legumes: ",carrinho[2][2]);

        //Sessao das proteinas

        document.write("<br><br><br> Sessao das proteinas <br>");
        document.write("Voce comprou ",carrinho[0][3],". <br>");
        document.write("voce comprou ",carrinho[1][3]," unidade de ",carrinho[0][3],"<br><br>");
        document.write("Valor da sessao das proteinas: ",carrinho[2][3]);


       

            
            
            //Sessao dos Congelados

            document.write("<br><br><br> Sessao das Congelados <br>");
            document.write("Voce comprou ",carrinho[0][4],"<br>");
            document.write("voce comprou ",carrinho[1][4]," unidade de ",carrinho[0][4],"<br><br>");
            document.write("Valor da sessao das Congelados: ",carrinho[2][4]," reais");

            //Sessao das Bebidas

            document.write("<br><br><br> Sessa das Bebidas <br>");
            document.write("Voce comprou",carrinho[0][5]," <br>");
            document.write("voce comprou ",carrinho[1][5]," unidade de ",carrinho[0][5],"<br><br>");
            document.write("Valor da sessao das Bebidas: ",carrinho[2][5]," reais");

            //Sessao dos Bebidas alcoolicas

            document.write("<br><br><br> Sessa das Bebidas alcoolicas <br>");
            document.write("Voce comprou ",carrinho[0][6]," <br>");
            document.write("voce comprou ",carrinho[1][6]," unidade de ",carrinho[0][6],"<br><br>");
            document.write("Valor da sessao dos Bebidas alcoolicas: ",carrinho[2][6]," reais");

            //Sessao das Panificadoras

            document.write("<br><br><br> Sessa da Panificadora <br>");
            document.write("Voce comprou ",carrinho[0][7]," <br>");
            document.write("voce comprou ",carrinho[1][7]," unidade de ",carrinho[0][7],"<br><br>");
            document.write("Valor da sessao da Panificadora: ",carrinho[2][7]," reais");



            
            document.write("<hr> DESCONTOS.");

            //descontos
            
            //fruta
            if (carrinho[1][0] >= 10) {
                
                document.write("<br><br>Voce ganhou um desconto de 5% na sessao das frutas!");
    
                var f = carrinho[2][0] - carrinho[2][0] * 0.05 
              
    
                document.write("<br> valor antigo ",carrinho[2][0]," novo valor ",f);
                
                carrinho[2][0] = carrinho[2][0] - carrinho[2][0] * 0.05 
                
            }
    
    
            //verduras
            if(carrinho[1][1] > 8){
    
                document.write("<br><br>Voce ganhou um desconto de 8% na sessao das verduras!");
    
                var v = carrinho[2][1] - carrinho[2][1] * 0.08 
             
                document.write("<br> valor antigo ",carrinho[2][1]," novo valor ",v);
    
                carrinho[2][1] = carrinho[2][1] - carrinho[2][1] * 0.08
    
            }
    
            //legumes
            if(carrinho[1][2] > 8){
    
                document.write("<br><br>Voce ganhou um desconto de 8% na sessao dos legumes!");
    
                var w = carrinho[2][2] - carrinho[2][2] * 0.08 
              
    
                document.write("<br> valor antigo ",carrinho[2][2]," novo valor ",w);
    
                carrinho[2][2] = carrinho[2][2] - carrinho[2][2] * 0.08
            }
    
            //peixe
            if(carrinho[0][3] == "peixe." || carrinho[0][3] == "Peixe."){
    
                document.write("<br><br>O peixe tem um desconto de 10% a unidade!");
    
                var p = carrinho[2][3] - carrinho[2][3]*0.1;
            
    
                document.write("<br> valor antigo ",carrinho[2][3]," novo valor ",p);
    
                carrinho[2][3] = carrinho[2][3] - carrinho[2][3]*0.1;
            }
            
            
            //bebidas alcoolicas

            if(divi == 0){
    
                var divi = carrinho[1][6]/6
            
                carrinho[2][6] = carrinho[2][6]-(divi*p);
            
                document.write("<br> O valor novo: ",carrinho[2][6])
            
            
            } else if(0<divi){
                
                var divi = carrinho[1][6]/6
                var x = Math.round(divi);
            
                carrinho[2][6] = carrinho[2][6]-(x*p);
            
                document.write("<br> O valor novo: ",carrinho[2][6])
            
            }else{
            
            
                var divi = carrinho[1][6]/6
                var x = Math.round(divi);
            
                carrinho[2][6] = carrinho[2][6]-(x*p);
            
                document.write("<br> O novo valor: ",carrinho[2][6])
            
            
            }
            
            
            
            
            
            //Total de compras

            var preco = carrinho[2][0]+carrinho[2][1]+carrinho[2][2]+carrinho[2][3]+carrinho[2][4]+carrinho[2][5]+carrinho[2][6]+carrinho[2][7]

            document.write("<hr> ","Valor total em produtos: ",preco);

            document.write("<br><br>")
            




            //Valor do frete
            
            document.write("<hr>")

        if (preco > 75) {
            
            
            document.write("Valor do frete: 0");
            document.write("<hr> Valor total: ",preco)

        } else {
            
            document.write("Valor do frete: 7");
            document.write("<br>Valor total da compra: ");
            document.write(preco+7)

        }

            }else{
                alert("Opa,so pode 45 itens por sessao.");
            }