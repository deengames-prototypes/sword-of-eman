// Generated by CoffeeScript 1.8.0
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  window.Model || (window.Model = {});


  /*
   * A basic quest (go somewhere and do something). Not a composite.
   * Base type with common attributes. Handles factory-like construction.
   * Delegates to specific types, eg. new IntroductionQuest
   */

  window.Model.Quest = (function() {
    var validate;

    Quest.validTypes = ['Introduction', 'FinalBattle', 'PowerUp'];

    function Quest(type) {
      this.type = type;
    }

    Quest.create = function(type) {
      validate(type);
      return new window.Model["" + type + "Quest"]();
    };

    Quest.createMainQuests = function(intro, ending) {
      var i, numSubQuests, subQuest, subQuests, _i;
      numSubQuests = 2 + Math.ceil(Math.random() * 3);
      console.debug("" + numSubQuests + " sub-quests");
      subQuests = [];
      for (i = _i = 0; 0 <= numSubQuests ? _i < numSubQuests : _i > numSubQuests; i = 0 <= numSubQuests ? ++_i : --_i) {
        subQuest = window.Model.Quest.create('PowerUp');
        subQuests.push(subQuest);
      }
      return subQuests;
    };

    Quest.prototype.toString = function() {
      return "" + this.constructor.name + ": " + this.description;
    };

    validate = function(type) {
      if (__indexOf.call(Quest.validTypes, type) < 0) {
        throw "Invalid quest of type '" + type + "'";
      }
    };

    return Quest;

  })();

}).call(this);