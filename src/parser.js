export default  /*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */
  (function () {
    "use strict"

    function peg$subclass(child, parent) {
      function ctor() { this.constructor = child }
      ctor.prototype = parent.prototype
      child.prototype = new ctor()
    }

    function peg$SyntaxError(message, expected, found, location) {
      this.message = message
      this.expected = expected
      this.found = found
      this.location = location
      this.name = "SyntaxError"

      if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(this, peg$SyntaxError)
      }
    }

    peg$subclass(peg$SyntaxError, Error)

    peg$SyntaxError.buildMessage = function (expected, found) {
      var DESCRIBE_EXPECTATION_FNS = {
        literal: function (expectation) {
          return "\"" + literalEscape(expectation.text) + "\""
        },

        "class": function (expectation) {
          var escapedParts = "",
            i

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i])
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]"
        },

        any: function (expectation) {
          return "any character"
        },

        end: function (expectation) {
          return "end of input"
        },

        other: function (expectation) {
          return expectation.description
        }
      }

      function hex(ch) {
        return ch.charCodeAt(0).toString(16).toUpperCase()
      }

      function literalEscape(s) {
        return s
          .replace(/\\/g, '\\\\')
          .replace(/"/g, '\\"')
          .replace(/\0/g, '\\0')
          .replace(/\t/g, '\\t')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')
          .replace(/[\x00-\x0F]/g, function (ch) { return '\\x0' + hex(ch) })
          .replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) { return '\\x' + hex(ch) })
      }

      function classEscape(s) {
        return s
          .replace(/\\/g, '\\\\')
          .replace(/\]/g, '\\]')
          .replace(/\^/g, '\\^')
          .replace(/-/g, '\\-')
          .replace(/\0/g, '\\0')
          .replace(/\t/g, '\\t')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')
          .replace(/[\x00-\x0F]/g, function (ch) { return '\\x0' + hex(ch) })
          .replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) { return '\\x' + hex(ch) })
      }

      function describeExpectation(expectation) {
        return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation)
      }

      function describeExpected(expected) {
        var descriptions = new Array(expected.length),
          i, j

        for (i = 0; i < expected.length; i++) {
          descriptions[i] = describeExpectation(expected[i])
        }

        descriptions.sort()

        if (descriptions.length > 0) {
          for (i = 1, j = 1; i < descriptions.length; i++) {
            if (descriptions[i - 1] !== descriptions[i]) {
              descriptions[j] = descriptions[i]
              j++
            }
          }
          descriptions.length = j
        }

        switch (descriptions.length) {
          case 1:
            return descriptions[0]

          case 2:
            return descriptions[0] + " or " + descriptions[1]

          default:
            return descriptions.slice(0, -1).join(", ")
              + ", or "
              + descriptions[descriptions.length - 1]
        }
      }

      function describeFound(found) {
        return found ? "\"" + literalEscape(found) + "\"" : "end of input"
      }

      return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found."
    }

    function peg$parse(input, options) {
      options = options !== void 0 ? options : {}

      var peg$FAILED = {},

        peg$startRuleFunctions = { document: peg$parsedocument },
        peg$startRuleFunction = peg$parsedocument,

        peg$c0 = function (tag_name, content) {
          return { tag: tag_name, content: content }
        },
        peg$c1 = "/*",
        peg$c2 = peg$literalExpectation("/*", false),
        peg$c3 = "*/",
        peg$c4 = peg$literalExpectation("*/", false),
        peg$c5 = function () { },
        peg$c6 = "-",
        peg$c7 = peg$literalExpectation("-", false),
        peg$c8 = function (name) { return name },
        peg$c9 = "-/",
        peg$c10 = peg$literalExpectation("-/", false),
        peg$c11 = /^[a-z]/,
        peg$c12 = peg$classExpectation([["a", "z"]], false, false),
        peg$c13 = "#",
        peg$c14 = peg$literalExpectation("#", false),
        peg$c15 = /^[0-9a-f]/,
        peg$c16 = peg$classExpectation([["0", "9"], ["a", "f"]], false, false),
        peg$c17 = function (tag_name, value) { return { name: tag_name.join(''), value: value.join('') } },
        peg$c18 = function (tag_name) { return { name: tag_name.join(''), value: null } },
        peg$c19 = function (item) {
          return item
        },
        peg$c20 = function (letters) {
          return letters.join('').trim()
        },
        peg$c21 = /^[a-zA-Z0-9_+&\^%$@!\n]/,
        peg$c22 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_", "+", "&", "^", "%", "$", "@", "!", "\n"], false, false),
        peg$c23 = " ",
        peg$c24 = peg$literalExpectation(" ", false),
        peg$c25 = "\\",
        peg$c26 = peg$literalExpectation("\\", false),
        peg$c27 = "\n",
        peg$c28 = peg$literalExpectation("\n", false),

        peg$currPos = 0,
        peg$savedPos = 0,
        peg$posDetailsCache = [{ line: 1, column: 1 }],
        peg$maxFailPos = 0,
        peg$maxFailExpected = [],
        peg$silentFails = 0,

        peg$result

      if ("startRule" in options) {
        if (!(options.startRule in peg$startRuleFunctions)) {
          throw new Error("Can't start parsing from rule \"" + options.startRule + "\".")
        }

        peg$startRuleFunction = peg$startRuleFunctions[options.startRule]
      }

      function text() {
        return input.substring(peg$savedPos, peg$currPos)
      }

      function location() {
        return peg$computeLocation(peg$savedPos, peg$currPos)
      }

      function expected(description, location) {
        location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

        throw peg$buildStructuredError(
          [peg$otherExpectation(description)],
          input.substring(peg$savedPos, peg$currPos),
          location
        )
      }

      function error(message, location) {
        location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

        throw peg$buildSimpleError(message, location)
      }

      function peg$literalExpectation(text, ignoreCase) {
        return { type: "literal", text: text, ignoreCase: ignoreCase }
      }

      function peg$classExpectation(parts, inverted, ignoreCase) {
        return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase }
      }

      function peg$anyExpectation() {
        return { type: "any" }
      }

      function peg$endExpectation() {
        return { type: "end" }
      }

      function peg$otherExpectation(description) {
        return { type: "other", description: description }
      }

      function peg$computePosDetails(pos) {
        var details = peg$posDetailsCache[pos], p

        if (details) {
          return details
        } else {
          p = pos - 1
          while (!peg$posDetailsCache[p]) {
            p--
          }

          details = peg$posDetailsCache[p]
          details = {
            line: details.line,
            column: details.column
          }

          while (p < pos) {
            if (input.charCodeAt(p) === 10) {
              details.line++
              details.column = 1
            } else {
              details.column++
            }

            p++
          }

          peg$posDetailsCache[pos] = details
          return details
        }
      }

      function peg$computeLocation(startPos, endPos) {
        var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails = peg$computePosDetails(endPos)

        return {
          start: {
            offset: startPos,
            line: startPosDetails.line,
            column: startPosDetails.column
          },
          end: {
            offset: endPos,
            line: endPosDetails.line,
            column: endPosDetails.column
          }
        }
      }

      function peg$fail(expected) {
        if (peg$currPos < peg$maxFailPos) { return }

        if (peg$currPos > peg$maxFailPos) {
          peg$maxFailPos = peg$currPos
          peg$maxFailExpected = []
        }

        peg$maxFailExpected.push(expected)
      }

      function peg$buildSimpleError(message, location) {
        return new peg$SyntaxError(message, null, null, location)
      }

      function peg$buildStructuredError(expected, found, location) {
        return new peg$SyntaxError(
          peg$SyntaxError.buildMessage(expected, found),
          expected,
          found,
          location
        )
      }

      function peg$parsedocument() {
        var s0, s1

        s0 = []
        s1 = peg$parseblock()
        while (s1 !== peg$FAILED) {
          s0.push(s1)
          s1 = peg$parseblock()
        }

        return s0
      }

      function peg$parseblock() {
        var s0, s1, s2, s3

        s0 = peg$currPos
        s1 = peg$parseopen_tag()
        if (s1 !== peg$FAILED) {
          s2 = peg$parsecontent_of_the_block()
          if (s2 !== peg$FAILED) {
            s3 = peg$parseclose_tag()
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0
              s1 = peg$c0(s1, s2)
              s0 = s1
            } else {
              peg$currPos = s0
              s0 = peg$FAILED
            }
          } else {
            peg$currPos = s0
            s0 = peg$FAILED
          }
        } else {
          peg$currPos = s0
          s0 = peg$FAILED
        }
        if (s0 === peg$FAILED) {
          s0 = peg$parsecomment()
        }

        return s0
      }

      function peg$parsecomment() {
        var s0, s1, s2, s3, s4, s5, s6

        s0 = peg$currPos
        s1 = []
        s2 = peg$parseall_delimitor()
        while (s2 !== peg$FAILED) {
          s1.push(s2)
          s2 = peg$parseall_delimitor()
        }
        if (s1 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c1) {
            s2 = peg$c1
            peg$currPos += 2
          } else {
            s2 = peg$FAILED
            if (peg$silentFails === 0) { peg$fail(peg$c2) }
          }
          if (s2 !== peg$FAILED) {
            s3 = []
            s4 = peg$parsesentence()
            if (s4 !== peg$FAILED) {
              while (s4 !== peg$FAILED) {
                s3.push(s4)
                s4 = peg$parsesentence()
              }
            } else {
              s3 = peg$FAILED
            }
            if (s3 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c3) {
                s4 = peg$c3
                peg$currPos += 2
              } else {
                s4 = peg$FAILED
                if (peg$silentFails === 0) { peg$fail(peg$c4) }
              }
              if (s4 !== peg$FAILED) {
                s5 = []
                s6 = peg$parseall_delimitor()
                while (s6 !== peg$FAILED) {
                  s5.push(s6)
                  s6 = peg$parseall_delimitor()
                }
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0
                  s1 = peg$c5()
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$FAILED
                }
              } else {
                peg$currPos = s0
                s0 = peg$FAILED
              }
            } else {
              peg$currPos = s0
              s0 = peg$FAILED
            }
          } else {
            peg$currPos = s0
            s0 = peg$FAILED
          }
        } else {
          peg$currPos = s0
          s0 = peg$FAILED
        }

        return s0
      }

      function peg$parseopen_tag() {
        var s0, s1, s2, s3, s4, s5, s6

        s0 = peg$currPos
        s1 = []
        s2 = peg$parseall_delimitor()
        while (s2 !== peg$FAILED) {
          s1.push(s2)
          s2 = peg$parseall_delimitor()
        }
        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 45) {
            s2 = peg$c6
            peg$currPos++
          } else {
            s2 = peg$FAILED
            if (peg$silentFails === 0) { peg$fail(peg$c7) }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parsetag()
            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 45) {
                s4 = peg$c6
                peg$currPos++
              } else {
                s4 = peg$FAILED
                if (peg$silentFails === 0) { peg$fail(peg$c7) }
              }
              if (s4 !== peg$FAILED) {
                s5 = []
                s6 = peg$parseall_delimitor()
                while (s6 !== peg$FAILED) {
                  s5.push(s6)
                  s6 = peg$parseall_delimitor()
                }
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0
                  s1 = peg$c8(s3)
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$FAILED
                }
              } else {
                peg$currPos = s0
                s0 = peg$FAILED
              }
            } else {
              peg$currPos = s0
              s0 = peg$FAILED
            }
          } else {
            peg$currPos = s0
            s0 = peg$FAILED
          }
        } else {
          peg$currPos = s0
          s0 = peg$FAILED
        }

        return s0
      }

      function peg$parseclose_tag() {
        var s0, s1, s2, s3, s4, s5, s6

        s0 = peg$currPos
        s1 = []
        s2 = peg$parseall_delimitor()
        while (s2 !== peg$FAILED) {
          s1.push(s2)
          s2 = peg$parseall_delimitor()
        }
        if (s1 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c9) {
            s2 = peg$c9
            peg$currPos += 2
          } else {
            s2 = peg$FAILED
            if (peg$silentFails === 0) { peg$fail(peg$c10) }
          }
          if (s2 !== peg$FAILED) {
            s3 = []
            s4 = peg$parsetag()
            while (s4 !== peg$FAILED) {
              s3.push(s4)
              s4 = peg$parsetag()
            }
            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 45) {
                s4 = peg$c6
                peg$currPos++
              } else {
                s4 = peg$FAILED
                if (peg$silentFails === 0) { peg$fail(peg$c7) }
              }
              if (s4 !== peg$FAILED) {
                s5 = []
                s6 = peg$parseall_delimitor()
                while (s6 !== peg$FAILED) {
                  s5.push(s6)
                  s6 = peg$parseall_delimitor()
                }
                if (s5 !== peg$FAILED) {
                  s1 = [s1, s2, s3, s4, s5]
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$FAILED
                }
              } else {
                peg$currPos = s0
                s0 = peg$FAILED
              }
            } else {
              peg$currPos = s0
              s0 = peg$FAILED
            }
          } else {
            peg$currPos = s0
            s0 = peg$FAILED
          }
        } else {
          peg$currPos = s0
          s0 = peg$FAILED
        }

        return s0
      }

      function peg$parsetag() {
        var s0, s1, s2, s3, s4

        s0 = peg$currPos
        s1 = []
        if (peg$c11.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos)
          peg$currPos++
        } else {
          s2 = peg$FAILED
          if (peg$silentFails === 0) { peg$fail(peg$c12) }
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2)
            if (peg$c11.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos)
              peg$currPos++
            } else {
              s2 = peg$FAILED
              if (peg$silentFails === 0) { peg$fail(peg$c12) }
            }
          }
        } else {
          s1 = peg$FAILED
        }
        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 35) {
            s2 = peg$c13
            peg$currPos++
          } else {
            s2 = peg$FAILED
            if (peg$silentFails === 0) { peg$fail(peg$c14) }
          }
          if (s2 !== peg$FAILED) {
            s3 = []
            if (peg$c15.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos)
              peg$currPos++
            } else {
              s4 = peg$FAILED
              if (peg$silentFails === 0) { peg$fail(peg$c16) }
            }
            if (s4 !== peg$FAILED) {
              while (s4 !== peg$FAILED) {
                s3.push(s4)
                if (peg$c15.test(input.charAt(peg$currPos))) {
                  s4 = input.charAt(peg$currPos)
                  peg$currPos++
                } else {
                  s4 = peg$FAILED
                  if (peg$silentFails === 0) { peg$fail(peg$c16) }
                }
              }
            } else {
              s3 = peg$FAILED
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0
              s1 = peg$c17(s1, s3)
              s0 = s1
            } else {
              peg$currPos = s0
              s0 = peg$FAILED
            }
          } else {
            peg$currPos = s0
            s0 = peg$FAILED
          }
        } else {
          peg$currPos = s0
          s0 = peg$FAILED
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos
          s1 = []
          if (peg$c11.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos)
            peg$currPos++
          } else {
            s2 = peg$FAILED
            if (peg$silentFails === 0) { peg$fail(peg$c12) }
          }
          if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
              s1.push(s2)
              if (peg$c11.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos)
                peg$currPos++
              } else {
                s2 = peg$FAILED
                if (peg$silentFails === 0) { peg$fail(peg$c12) }
              }
            }
          } else {
            s1 = peg$FAILED
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0
            s1 = peg$c18(s1)
          }
          s0 = s1
        }

        return s0
      }

      function peg$parsecontent_of_the_block() {
        var s0, s1, s2

        s0 = peg$currPos
        s1 = []
        s2 = peg$parseblock()
        if (s2 === peg$FAILED) {
          s2 = peg$parsesentence()
        }
        while (s2 !== peg$FAILED) {
          s1.push(s2)
          s2 = peg$parseblock()
          if (s2 === peg$FAILED) {
            s2 = peg$parsesentence()
          }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0
          s1 = peg$c19(s1)
        }
        s0 = s1

        return s0
      }

      function peg$parsesentence() {
        var s0, s1, s2

        s0 = peg$currPos
        s1 = []
        s2 = peg$parseletter()
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2)
            s2 = peg$parseletter()
          }
        } else {
          s1 = peg$FAILED
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0
          s1 = peg$c20(s1)
        }
        s0 = s1

        return s0
      }

      function peg$parseletter() {
        var s0

        if (peg$c21.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos)
          peg$currPos++
        } else {
          s0 = peg$FAILED
          if (peg$silentFails === 0) { peg$fail(peg$c22) }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 32) {
            s0 = peg$c23
            peg$currPos++
          } else {
            s0 = peg$FAILED
            if (peg$silentFails === 0) { peg$fail(peg$c24) }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 92) {
              s0 = peg$c25
              peg$currPos++
            } else {
              s0 = peg$FAILED
              if (peg$silentFails === 0) { peg$fail(peg$c26) }
            }
          }
        }

        return s0
      }

      function peg$parseall_delimitor() {
        var s0

        if (input.charCodeAt(peg$currPos) === 32) {
          s0 = peg$c23
          peg$currPos++
        } else {
          s0 = peg$FAILED
          if (peg$silentFails === 0) { peg$fail(peg$c24) }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 10) {
            s0 = peg$c27
            peg$currPos++
          } else {
            s0 = peg$FAILED
            if (peg$silentFails === 0) { peg$fail(peg$c28) }
          }
        }

        return s0
      }

      peg$result = peg$startRuleFunction()

      if (peg$result !== peg$FAILED && peg$currPos === input.length) {
        return peg$result
      } else {
        if (peg$result !== peg$FAILED && peg$currPos < input.length) {
          peg$fail(peg$endExpectation())
        }

        throw peg$buildStructuredError(
          peg$maxFailExpected,
          peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
          peg$maxFailPos < input.length
            ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
            : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
        )
      }
    }

    return {
      SyntaxError: peg$SyntaxError,
      parse: peg$parse
    }
  })()
