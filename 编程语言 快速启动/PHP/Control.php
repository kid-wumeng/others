<?php

    $var = 1;

    if ( $var < 10 ) {
        /* ... */
    } else if ( $var < 20 ) {
        /* ... */
    } else {
        /* ... */
    }



    /* $var会自动转换为case对应的类型再比较 */
    switch ( $var ) {
        case 1:
            /* ... */ break;
        case 'string':
            /* ... */ break;
        case false:
            /* ... */ break;
        case array( 1, 2, 3 ):
            /* ... */ break;
        default:
            /* ... */
    }



    for ( $i = 0; $i < 10; $i++ ) {
        /* ... */
    }
    // $i用完后仍存在，这里为10



    $i = 0;
    while ( $i < 10 ) {
        /* ... */;
        $i++;
    }



    $i = 0;
    do {
        /* ... */
        $i++;
    } while ( $i < 10 );

    /* for, while, do-while中皆可使用continue与break */



    goto Label;
    echo 1;  // 跳过了
    Label:
        echo 2;

    /*
     * goto可以往前、往后跳；
     * 可以跳出switch或循环，但无法跳入
     */

?>
