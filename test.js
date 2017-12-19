import test from "ava"
import _ from "."

test("merges two objects", t => t.deepEqual(_([{ a: 0 }, { b: true }]), { a: 0, b: true }))

test("handles one object", t => t.deepEqual(_([{ s: "hello" }]), { s: "hello" }))

test("handles an empty array", t => t.deepEqual(_([]), {}))

test("handles mixed objects and non-objects in the array", t => t.deepEqual(_([{ a: 0 }, "", true, () => {}]), { a: 0 }))

test("handles anything that is not an array", t => t.deepEqual(_(""), {}))

test("does not merge recursively", t => t.deepEqual(_([{ a: { b: 0 } }, { a: { c: "d" } }]), { a: { c: "d" } }))

test("overwrites existing properties by default", t => t.deepEqual(_([{ a: 0, b: "1" }, { b: 1 }]), { a: 0, b: 1 }))

test("does not overwrite existing properties if toggle is passed", t => {
  let objA = { a: [] }
  let objB = { a: 1, b: 0 }
  t.deepEqual(_([objA, objB], false), { a: [], b: 0 })
})

test("creates merged objects independent of the original ones", t => {
  let objA = { a: 0 }
  let objB = { b: "1" }
  let objC = _([objA, objB])
  objA.a = 1
  objB.b = 2
  t.deepEqual(objC, { a: 0, b: "1" })
})
