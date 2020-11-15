
function calcul(frm)
{
var somme=parseInt(frm.DC1.value)*parseInt(frm.coef1.value)+parseInt(frm.DC2.value)*parseInt(frm.coef2.value)+parseInt(frm.DS.value)*parseInt(frm.coef3.value)
var moy=somme/(parseInt(frm.coef1.value)+parseInt(frm.coef2.value)+parseInt(frm.coef3.value));
document.write("Votre moyenne est ",moy);
}