"use strict"
import $ from './../../node_modules/jquery/dist/jquery';
import Moadel from './moadel';
const moadel = new Moadel();

$(document).ready(() => {

    $("#add").click(e => {
        console.log('hello');
        e.preventDefault();
        moadel.addGrade($('#grade').val(), $('#zarib').val(), $('#mostamar').val());
        console.log(moadel.grades);
        $('#moadel').removeClass('disabled');
    });
    $("#moadel").click(e => {
        e.preventDefault();
        const n = moadel.showMoadel()
        $('.output').css('display', 'block');
        $('.output__paragraph').text(`Moadel shoma : ${n}`);
    });
});