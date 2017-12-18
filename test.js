import test from "ava"
import _ from "."

test("merges two objects", t => t.deepEqual(_([{ a: 0 }, { b: true }]), { a: 0, b: true }))

test("handles one object", t => t.deepEqual(_([{ s: "hello" }]), { s: "hello" }))

test("handles an empty array", t => t.deepEqual(_([]), {}))
