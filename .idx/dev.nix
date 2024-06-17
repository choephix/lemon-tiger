{ pkgs }: {
  channel = "stable-23.11";
  packages = [
    pkgs.bun
    pkgs.nodejs_20
  ];
  idx.extensions = [
    "esbenp.prettier-vscode"
    "mhutchie.git-graph"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "bun"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}
