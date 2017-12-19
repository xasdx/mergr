import test from "ava"
import _ from "."

test("merges two objects", t => t.deepEqual(_([{ a: 0 }, { b: true }]), { a: 0, b: true }))

test("handles one object", t => t.deepEqual(_([{ s: "hello" }]), { s: "hello" }))

test("handles an empty array", t => t.deepEqual(_([]), {}))

test("handles mixed objects and non-objects in the array", t => t.deepEqual(_([{ a: 0 }, "", true, () => {}]), { a: 0 }))

test("handles anything that is not an array", t => t.deepEqual(_(""), {}))

test("does not merge recursively", t => t.deepEqual(_([{ a: { b: 0 } }, { a: { c: "d" } }]), { a: { c: "d" } }))

test("overwrites existing properties", t => t.deepEqual(_([{ a: 0, b: "1" }, { b: 1 }]), { a: 0, b: 1 }))
