class DebugTool{static get isDebug(){return DebugTool.debugActive}static ifDebug(e){DebugTool.isDebug&&e()}}DebugTool.debugActive=["127.0.0.1","localhost","::1"].includes(window.location.hostname);export default DebugTool;