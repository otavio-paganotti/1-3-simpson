let x = []
let y = []

let nx = 4
let ny = 4

let hx = 0.2
let hy = 0.3

let lmb = 862

const alfa = () => {
	return lmb % 8
}

const beta = () => {
	return lmb % 9
}

let a = 1 + 0.1 * alfa()
let b = a + 0.8
let c = 2 + 0.1 * beta()
let d = c + 1.2

const xi = () => {
	for (let i = 0; i < 5; i++) {
		x[i] = a + i * hx
	}
}

const yi = () => {
	for (let j = 0; j < 5; j++) {
		y[j] = c + j * hy
	}
}

xi()
yi()

const f = (x, y) => {
	return Math.log(x * y) + Math.sqrt(x)
}

const gzero = () => {
	return (hy/3) * (f(x[0], y[0]) + 4 * (f(x[0], y[1]) + f(x[0], y[3])) + 2 * (f(x[0], y[2])) + f(x[0], y[4]))
}

const gum = () => {
	return (hy/3) * (f(x[1], y[0]) + 4 * (f(x[1], y[1]) + f(x[1], y[3])) + 2 * (f(x[1], y[2])) + f(x[1], y[4]))
}

const gdois = () => {
	return (hy/3) * (f(x[2], y[0]) + 4 * (f(x[2], y[1]) + f(x[2], y[3])) + 2 * (f(x[2], y[2])) + f(x[2], y[4]))
}

const gtres = () => {
	return (hy/3) * (f(x[3], y[0]) + 4 * (f(x[3], y[1]) + f(x[3], y[3])) + 2 * (f(x[3], y[2])) + f(x[3], y[4]))
}

const gquatro = () => {
	return (hy/3) * (f(x[4], y[0]) + 4 * (f(x[4], y[1]) + f(x[4], y[3])) + 2 * (f(x[4], y[2])) + f(x[4], y[4]))
}

const umterco = () => {
	console.log('Iap = ' + ((hx/3) * (gzero() + (4 * gum()) + (2 * gdois()) + (4 * gtres()) + gquatro())).toFixed(4))
	console.log('G(X0) = ' + (gzero().toFixed(4)))
	console.log('G(X1) = ' + (gum()).toFixed(4))
	console.log('G(X2) = ' + (gdois()).toFixed(4))
	console.log('G(X3) = ' + (gtres()).toFixed(4))
	console.log('G(X4) = ' + (gquatro()).toFixed(4))
	return (hx/3) * (gzero() + (4 * gum()) + (2 * gdois()) + (4 * gtres()) + gquatro())
}

const ireal = () => {
	console.log('I = ' + (a * c * Math.log(a * c) - a * d * Math.log(a * d) - b * c * Math.log(b * c) + b * d * Math.log(b * d) + (2 * (c - d) * (Math.pow(a, 3 / 2)) - 3 * a - b * (Math.sqrt(b) - 3))/3).toFixed(4))
	return a * c * Math.log(a * c) - a * d * Math.log(a * d) - b * c * Math.log(b * c) + b * d * Math.log(b * d) + (2 * (c - d) * (Math.pow(a, 3 / 2)) - 3 * a - b * (Math.sqrt(b) - 3))/3
}

const erroreal = () => {
	let result = ireal() - umterco()
	console.log('Erro Real = (I - Iap) = ' + result.toFixed(4))
}

erroreal()