var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/project.ts
var SentinelProject = class {
  constructor(client, id) {
    this.client = client;
    this.id = id;
  }
  getIntegration(type, idOrName) {
    return new type(this, idOrName);
  }
};

// src/client.ts
var SentinelClient = class {
  constructor(apiKey, endpoint) {
    this.apiKey = apiKey;
    this.endpoint = endpoint || "https://sentinelapi.evo.tech";
    console.log("sentinel client initialized", this.apiKey, this.endpoint);
  }
  getProject(projectId) {
    return new SentinelProject(this, projectId);
  }
  sendRequest(projectId, integrationNameOrId, requestName, request) {
    return __async(this, null, function* () {
      const uri = `${this.endpoint}/projects/${projectId}/integrations/${integrationNameOrId}/requests/${requestName}`;
      console.log("fetching", uri);
      const r = yield fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Sentinel-Api-Key": this.apiKey
        },
        body: JSON.stringify(request)
      });
      if (r.ok) {
        return yield r.json();
      } else {
        const errorText = yield r.text();
        throw new Error(`${r.status} [${r.statusText}]: ${errorText}`);
      }
    });
  }
};

// src/integration.ts
var SentinelIntegration = class {
  constructor(project, idOrName) {
    this.project = project;
    this.idOrName = idOrName;
  }
  sendRequest(name, request) {
    return __async(this, null, function* () {
      return yield this.project.client.sendRequest(this.project.id, this.idOrName, name, request);
    });
  }
};

// src/autogen.ts
var EvoVoiceIntegration;
((EvoVoiceIntegration2) => {
  class Integration extends SentinelIntegration {
    constructor(project, idOrName) {
      super(project, idOrName);
    }
    listCustomers(request) {
      return __async(this, null, function* () {
        return yield this.sendRequest("ListCustomers", request);
      });
    }
    getCustomer(request) {
      return __async(this, null, function* () {
        return yield this.sendRequest("GetCustomer", request);
      });
    }
  }
  EvoVoiceIntegration2.Integration = Integration;
})(EvoVoiceIntegration || (EvoVoiceIntegration = {}));
var GptIntegration;
((GptIntegration2) => {
  class Integration extends SentinelIntegration {
    constructor(project, idOrName) {
      super(project, idOrName);
    }
    completeChatAsync(request) {
      return __async(this, null, function* () {
        return yield this.sendRequest("CompleteChatAsync", request);
      });
    }
  }
  GptIntegration2.Integration = Integration;
})(GptIntegration || (GptIntegration = {}));
var FreshdeskIntegration;
((FreshdeskIntegration2) => {
  class Integration extends SentinelIntegration {
    constructor(project, idOrName) {
      super(project, idOrName);
    }
    listAllTickets(request) {
      return __async(this, null, function* () {
        return yield this.sendRequest("ListAllTickets", request);
      });
    }
  }
  FreshdeskIntegration2.Integration = Integration;
})(FreshdeskIntegration || (FreshdeskIntegration = {}));
export {
  EvoVoiceIntegration,
  FreshdeskIntegration,
  GptIntegration,
  SentinelClient,
  SentinelIntegration,
  SentinelProject
};
//# sourceMappingURL=index.mjs.map