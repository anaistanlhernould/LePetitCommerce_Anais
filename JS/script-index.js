// FUNCTION GENERAL
function tailleFenetreMd () {
    var width = $(window).width();
        if (width < 768) {
            return true;
        } else {
            return false;
        }
    }
function tailleFenetreLg () {
    var width = $(window).width();
        if (width < 992) {
            return true;
        } else {
            return false;
        }
    }

/*************************************/
/************* HEADER  ***************/
/*************************************/
// LOGO 
$(window).resize(function(){
    var width = $(window).width();
    if (width < 768) {
    $(".logoEntier").hide() 
    $(".logoLPC").show();
    } else {
        $(".logoEntier").show() 
        $(".logoLPC").hide();
    }
});

// MENU BURGER 
var menuOnOff = false;    
$(".pictoBurger").click(function() {
    menuOnOff = !menuOnOff;
    if(menuOnOff && tailleFenetreMd()){
        $(".niveau1").animate({"left" : "-18px", "z-index":"100"},{queue : false, duration : 300});    
    } else{
        $(".niveau1").animate({"left" : "-300px"},{queue : false, duration : 300});  
    }
});

/**************************************/
/************** MAIN  *****************/
/**************************************/

// FONCTION CLICK ANNULE 

$(document).click(function() {
    var elemCourant = document.activeElement;
    if (elemCourant.id === "FemmesMenu") {
        $(".niveau2Femme").slideToggle({queue : false, duration : 100});  
    } else if (elemCourant.id != "FemmesMenu" && $(".niveau2Femme").is(':visible')) {
        $(".niveau2Femme").slideToggle({queue : false, duration : 100});
    }

    if (elemCourant.id === "HommesMenu") {
        $(".niveau2Homme").slideToggle({queue : false, duration : 100}); 
    } else if (elemCourant.id != "HommesMenu" && $(".niveau2Homme").is(':visible')) {
        $(".niveau2Homme").slideToggle({queue : false, duration : 100}); 
    }

    if (elemCourant.id === "EnfantsMenu") {
        $(".niveau2Enfant").slideToggle({queue : false, duration : 100}); 
    } else if (elemCourant.id != "EnfantsMenu" && $(".niveau2Enfant").is(':visible')) {
        $(".niveau2Enfant").slideToggle({queue : false, duration : 100}); 
    }

    if (elemCourant.id === "AccessoiresMenu") {
        $(".niveau2Accessoire").slideToggle({queue : false, duration : 100}); 
    } else if (elemCourant.id != "AccessoiresMenu" && $(".niveau2Accessoire").is(':visible')) {
        $(".niveau2Accessoire").slideToggle({queue : false, duration : 100});
    }

    if (elemCourant.id === "BoutiquesMenu") {
        $(".niveau2Boutique").slideToggle({queue : false, duration : 100}); 
    } else if (elemCourant.id != "BoutiquesMenu" && $(".niveau2Boutique").is(':visible')) {
        $(".niveau2Boutique").slideToggle({queue : false, duration : 100}); 
    }

    if (elemCourant.id === "boutonSearch") {
        $(".rechercheXS").slideToggle(300);
    } else if (elemCourant.id == "" && $(".rechercheXS").is(':visible')) {
        $(".rechercheXS").slideToggle(300);
    }

$(this).click(function() {
    $(this).data('clicked', true);
});

    if (elemCourant.id === "boutonPopUpCompte") {
        $(".popUp").slideToggle(300);
        $(".fondOpacity").css({
            "width":"100%", 
            "height":"100%", 
            "background":"black",
            "opacity":"0.5",
            "position" :"fixed",
            "z-index":"100",
        });
        $(".fondOpacity").slideToggle(300);
    } else if ($("#userName").data('clicked') && elemCourant.id == "" && $("#userName").val() == "" && $("#submitCompte").data('clicked')) {
        $(".popUp").show(); 
        $(".fondOpacity").show();
    } else if (elemCourant.id == "" && $(".popUp").is(':visible')) {
        $(".popUp").slideToggle();
        $(".fondOpacity").slideToggle();
    }

});


// PAGE PRODUIT - Bordure couleur choix produit
    $("#couleurProduit").click(function(){
        $(".couleurProduitBordure").toggle(); 
    });

    $("#couleurProduit1").click(function(){
        $(".couleurProduitBordure1").toggle(); 
    });


/********************************************/
/**************** FOOTER  *******************/
/********************************************/

    $(".sousMenuBoutiqueFooter").click(function() {
        if (tailleFenetreLg()) {
            $(".niveau2BoutiqueFooter").slideToggle({queue : false, duration : 100}); 
            } 
        }); 
        
    $(".sousMenuActuFooter").click(function() {
        if (tailleFenetreLg ()) {           
            $(".niveau2ActuFooter").slideToggle({queue : false, duration : 100}); }
    });

    $(".sousMenuLiensFooter").click(function() {
        if (tailleFenetreLg ()) {            
            $(".niveau2LiensFooter").slideToggle({queue : false, duration : 100}); }
    });

    $(".sousMenuAideFooter").click(function() {
        if (tailleFenetreLg ()) {            
            $(".niveau2AideFooter").slideToggle({queue : false, duration : 200}); }
    });




    
