const Swamp = require('./swamp');

const codes = `print "hello world"
var msg = "Swamp A Programming Lang Developed By Null !=0 AKA (Cinnamon)"
print msg`
;

const swamp = new Swamp(codes);
swamp.run()