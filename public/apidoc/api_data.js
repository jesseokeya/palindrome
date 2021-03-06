define({ "api": [
  {
    "type": "delete",
    "url": "/api/message/:id",
    "title": "Delete message",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Message id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./components/message/routes.js",
    "groupTitle": "Messages",
    "name": "DeleteApiMessageId",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>Message id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Message body</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Create date</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isPalindrome",
            "description": "<p>Message is a palindrome?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"57cd70ce5f491437b8027cb0\",\n  \"body\": \"Apple\",\n  \"created_at\": \"2016-09-05T13:19:10.897Z\",\n  \"updated_at\": \"2016-09-05T13:19:10.897Z\",\n  \"isPalindrome\": false\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/message",
    "title": "List all messages",
    "group": "Messages",
    "version": "0.0.0",
    "filename": "./components/message/routes.js",
    "groupTitle": "Messages",
    "name": "GetApiMessage",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "messages",
            "description": "<p>Message's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "message._id",
            "description": "<p>Message id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message.body",
            "description": "<p>Message body</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "message.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "message.created_at",
            "description": "<p>Create date</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "message.isPalindrome",
            "description": "<p>Message is a palindrome?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"57cd70ce5f491437b8027cb0\",\n  \"body\": \"Apple\",\n  \"created_at\": \"2016-09-05T13:19:10.897Z\",\n  \"updated_at\": \"2016-09-05T13:19:10.897Z\",\n  \"isPalindrome\": false\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoMessagesFound",
            "description": "<p>No messages were found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No messages found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/message/:id",
    "title": "Find message",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Message id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./components/message/routes.js",
    "groupTitle": "Messages",
    "name": "GetApiMessageId",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>Message id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Message body</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Create date</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isPalindrome",
            "description": "<p>Message is a palindrome?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"57cd70ce5f491437b8027cb0\",\n  \"body\": \"Apple\",\n  \"created_at\": \"2016-09-05T13:19:10.897Z\",\n  \"updated_at\": \"2016-09-05T13:19:10.897Z\",\n  \"isPalindrome\": false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MessageNotFound",
            "description": "<p>The id of the Message was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Message not found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/message",
    "title": "Creates new message",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Message body</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"body\": \"Apple\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./components/message/routes.js",
    "groupTitle": "Messages",
    "name": "PutApiMessage",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "messages",
            "description": "<p>Message's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "message._id",
            "description": "<p>Message id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message.body",
            "description": "<p>Message body</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "message.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "message.created_at",
            "description": "<p>Create date</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "message.isPalindrome",
            "description": "<p>Message is a palindrome?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"57cd70ce5f491437b8027cb0\",\n  \"body\": \"Apple\",\n  \"created_at\": \"2016-09-05T13:19:10.897Z\",\n  \"updated_at\": \"2016-09-05T13:19:10.897Z\",\n  \"isPalindrome\": false\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MessageNotFound",
            "description": "<p>The id of the Message was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MessageValidationFailed",
            "description": "<p>the message could not be validated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Message not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"message\": \"Message validation failed\",\n  \"error\": {\n    \"message\": \"Message validation failed\",\n    \"name\": \"ValidationError\",\n    \"errors\": {\n      \"body\": {\n        \"message\": \"Path `body` is required.\",\n        \"name\": \"ValidatorError\",\n        \"properties\": {\n          \"type\": \"required\",\n          \"message\": \"Path `{PATH}` is required.\",\n          \"path\": \"body\"\n        },\n        \"kind\": \"required\",\n        \"path\": \"body\"\n      }\n    },\n    \"status\": 400\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/message/:id",
    "title": "Update existing message",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Message id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Message body</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"body\": \"Apple\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./components/message/routes.js",
    "groupTitle": "Messages",
    "name": "PutApiMessageId",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "messages",
            "description": "<p>Message's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "message._id",
            "description": "<p>Message id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message.body",
            "description": "<p>Message body</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "message.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "message.created_at",
            "description": "<p>Create date</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "message.isPalindrome",
            "description": "<p>Message is a palindrome?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"57cd70ce5f491437b8027cb0\",\n  \"body\": \"Apple\",\n  \"created_at\": \"2016-09-05T13:19:10.897Z\",\n  \"updated_at\": \"2016-09-05T13:19:10.897Z\",\n  \"isPalindrome\": false\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MessageNotFound",
            "description": "<p>The id of the Message was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MessageValidationFailed",
            "description": "<p>the message could not be validated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Message not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"message\": \"Message validation failed\",\n  \"error\": {\n    \"message\": \"Message validation failed\",\n    \"name\": \"ValidationError\",\n    \"errors\": {\n      \"body\": {\n        \"message\": \"Path `body` is required.\",\n        \"name\": \"ValidatorError\",\n        \"properties\": {\n          \"type\": \"required\",\n          \"message\": \"Path `{PATH}` is required.\",\n          \"path\": \"body\"\n        },\n        \"kind\": \"required\",\n        \"path\": \"body\"\n      }\n    },\n    \"status\": 400\n  }\n}",
          "type": "json"
        }
      ]
    }
  }
] });
