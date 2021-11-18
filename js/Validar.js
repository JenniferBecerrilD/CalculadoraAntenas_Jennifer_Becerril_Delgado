//Validar Numeros

$('input.formulario_medidas').keypress(function(eve) {

    if ((eve.which != 46 || $(this).val().indexOf('.') != -1) && (eve.which < 48 || eve.which > 57) || (eve.which == 46 && $(this).caret().start == 0)) {

      eve.preventDefault();

    }

  

    $('input.formulario_medidas').keyup(function(eve) {

      if ($(this).val().indexOf('.') == 0) {

        $(this).val($(this).val().substring(1));

      }

    });

  });



  $('input.formulario_input').keypress(function(eve) {

    if ((eve.which != 46 || $(this).val().indexOf('.') != -1) && (eve.which < 48 || eve.which > 57) || (eve.which == 46 && $(this).caret().start == 0)) {

      eve.preventDefault();

    }

  


    $('input.formulario_input').keyup(function(eve) {

      if ($(this).val().indexOf('.') == 0) {

        $(this).val($(this).val().substring(1));

      }

    });

  });



  $('input.formulario_dielectricos_in').keypress(function(eve) {

    if ((eve.which != 46 || $(this).val().indexOf('.') != -1) && (eve.which < 48 || eve.which > 57) || (eve.which == 46 && $(this).caret().start == 0)) {

      eve.preventDefault();

    }

  

    $('input.formulario_dielectricos_in').keyup(function(eve) {

      if ($(this).val().indexOf('.') == 0) {

        $(this).val($(this).val().substring(1));

      }

    });

  });