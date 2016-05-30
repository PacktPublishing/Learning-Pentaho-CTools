define([
        'cdf/AddIn',
        'cdf/Dashboard',
        'cdf/dashboard/Utils',
        'cdf/Logger',
        'cdf/lib/jquery', 
        'amd!cdf/lib/underscore' 
    ],
    function(AddIn, Dashboard, Utils, Logger, $, _) {
  
        var localizedText = {
            
            name: "localizedText",
            label: "localizedText",
            
            defaults: {
                localize: function(v, st, opt) { 
                    return $.i18n.prop(v); 
                },
                cssClass: 'localizedTextContainer',
                layout: '<div> {CONTENT} </div>' 
            },
        
            init: function() { },
            
            implementation: function(tgt, st, opt) {
                var opts = $.extend(true, this.defaults, opt);
                var data = _.isFunction(opts.localize) ? opts.localize(st.value) : st.value;
                var $tgt = $(tgt);
                var $html = $(opts.layout.replace('{CONTENT}', data)).addClass(opts.cssClass);
                $tgt.empty().html($html);
            }
        };
        
        Dashboard.registerGlobalAddIn("Template", "templateType", new AddIn(localizedText));
        
        return localizedText;
    }
);
