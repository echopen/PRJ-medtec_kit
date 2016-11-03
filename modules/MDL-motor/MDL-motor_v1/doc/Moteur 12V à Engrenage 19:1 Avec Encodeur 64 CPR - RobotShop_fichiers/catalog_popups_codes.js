/*JOEL: script that manages the ajax new stock soon date pop-up on availabilityContainer
* USED IN CATEGORY AND PRODUCT PAGES*/
/*Bedcause of the structure of the checkout page, I couldn't use this file in checkout/onepage and had to embed the code in C:\xampp\htdocs\magento\app\design\frontend\rb\default\template\checkout\onepage\review */

jQuery(document).ready(function() {
    jQuery('.out-of-stock').hover(function() {
        var thisObj = jQuery(this);
        outOfStockHover(thisObj);
        if ( (jQuery(window).width() + getScrollBarWidth()) > 1024 ) {
            jQuery(this).siblings(".availabilityContainer_popup").stop(true, true).delay(300).show(0);
        }
    }, function() {
        if ( (jQuery(window).width() + getScrollBarWidth()) > 1024 ) {
            jQuery(this).siblings(".availabilityContainer_popup").stop(true, true).delay(200).hide(0);
        }
    });

    function outOfStockHover(thisObj) {
        var popup_content = thisObj.siblings(".availabilityContainer_popup");

        if ( popup_content.find('i').hasClass('icon-spinner') ) {
            var website = thisObj.attr("website");

            jQuery.ajax({
                url: website+"catalog/product_ajax/index/",
                dataType: "json",
                context:this,
                data: {'sku': thisObj.attr("sku"), 'stockid': thisObj.attr("stockid"), 'isSO': thisObj.attr("isso")},
                success: function(data) {
                    var json = jQuery.parseJSON(data);
                    thisObj.siblings(".availabilityContainer_popup").html(data.date);
                }
            });
        }
    }

    function outOfStockMobile() {
        if ( (jQuery(window).width() + getScrollBarWidth()) < 1025 ) {
            jQuery('.availability.out-of-stock').each(function() {
                if ( jQuery('body').hasClass('catalog-product-view') ) {
                    var thisPopup = jQuery(this).parent();
                } else {
                    var thisPopup = jQuery(this);
                }

                var thisObj = jQuery(this);
                var website = thisObj.attr("website");

                jQuery.ajax({
                    url: website+"catalog/product_ajax/index/",
                    dataType: "json",
                    context:this,
                    data: {'sku': thisObj.attr("sku"), 'stockid': thisObj.attr("stockid")},
                    success: function(data) {
                        var json = jQuery.parseJSON(data);
                        thisPopup.siblings(".availabilityContainer_popup").html(data.date);
                    }
                });
                jQuery(this).siblings(".availabilityContainer_popup").show();
            });
        } else {
            jQuery('.availabilityContainer_popup').hide();
        }
    }

    //outOfStockMobile();
    //jQuery(window).resize(outOfStockMobile);


    jQuery('.availabilityContainer_popup').click(function() {
        jQuery(this).hide();
    });

    /*
    jQuery('.special-order').hover(function() {
        var id = jQuery(this).attr('id');

        jQuery(this).siblings(".availabilityContainer_popup").html(Translator.translate('specialOrderMessage'));

        if (id && id != 'undefined') {
            jQuery(this).siblings(".availabilityContainer_popup").html(jQuery('.availabilityLeadTimeContainer_popup').text());
        }

        jQuery(this).siblings(".availabilityContainer_popup").stop(true, true).delay(300).show(0);
    }, function() {
        jQuery(this).siblings(".availabilityContainer_popup").stop(true, true).delay(200).hide(0);
    });
    */

    jQuery('.special-order').hover(function() {
        var thisObj = jQuery(this);
        outOfStockHover(thisObj);
        if ( (jQuery(window).width() + getScrollBarWidth()) > 1024 ) {
            jQuery(this).siblings(".availabilityContainer_popup").stop(true, true).delay(300).show(0);
        }
    }, function() {
        if ( (jQuery(window).width() + getScrollBarWidth()) > 1024 ) {
            jQuery(this).siblings(".availabilityContainer_popup").stop(true, true).delay(200).hide(0);
        }
    });


     jQuery('.compareLinkHover').hover(function() {
         var thisObj = jQuery(this);
         compareLinkHover(thisObj);
         jQuery(this).children(".comparePopUp").stop(true, true).delay(300).show(0);
     }, function() {
         jQuery(this).children(".comparePopUp").stop(true, true).delay(200).hide(0);
     });


    // Add popup hover function for short description product grid mode
    jQuery('.shortmessageHover').hover(function() {
        var thisObj = jQuery(this);
        compareLinkHover(thisObj);
        jQuery(this).children(".shortMessagePopUp").stop(true, true).delay(100).show(0);
    }, function() {
        jQuery(this).children(".shortMessagePopUp").stop(true, true).delay(100).hide(0);
    });


     function compareLinkHover(thisObj){
         var ajaxcalled = thisObj.attr("ajaxcalled");
         var in_comp_table = parseInt(thisObj.attr("comp_table"));

         if (in_comp_table){
             if (ajaxcalled=="false"){
                 var website = thisObj.attr("website");
                 thisObj.attr("ajaxcalled", "true");

                 jQuery.ajax({
                     url: website+"catalog/product_ajax/getcomptables/",
                     dataType: "json",
                     context:this,
                     data: {'sku': thisObj.attr("sku"), 'objid': thisObj.attr("objid"), 'entityid': thisObj.attr("entityid")},
                     success: function(data) {
                         var i=0;
                         var flag = false;

                         var comparedProductsLinks = "<ul>";
                         for (i=0;i<data.length;i++){
                             flag = true;
                             comparedProductsLinks += "<li><a href='"+ data[i].url +"' target='_blank'>" + capitalizeFirstLetter(data[i].name) + "</a></li>";
                         }
                         comparedProductsLinks += "</ul>";

                         if(flag){
                             thisObj.children(".comparePopUp").find(".icon-spinner-container").css("display", "none");
                             thisObj.children(".comparePopUp").find(".comparedProductsLinks").html(comparedProductsLinks);
                             thisObj.children(".comparePopUp").find(".comparison-text").css("display", "block");
                         }else{
                             thisObj.children(".comparePopUp").find(".comparedProducts").css("display", "none");
                         }
                     },
                     error: function(jq,status,message){
                         thisObj.children(".comparePopUp").find(".comparedProducts").css("display:none");
                     }
                 });
             }
         }else{
             thisObj.children(".comparePopUp").find(".comparedProducts").css("display", "none");
         }

     }

     jQuery(".comparePopUp").mouseover(function(){
         jQuery(this).css('display','block');
     });

     jQuery(".comparePopUp").mouseout(function(){
         jQuery(this).css('display','none');
     });
 });

function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}