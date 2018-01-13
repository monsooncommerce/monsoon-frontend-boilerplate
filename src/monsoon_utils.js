export const packageModules = (modules) => {
  const moduleExport = {};
  modules.keys().forEach((key) => {
    const name = key.split('/').slice(-1)[0].replace('.js','');
    if (!moduleExport[name] && name !== 'index') {
      moduleExport[name] = modules(key).default;
    }
  });

  return moduleExport;
};
