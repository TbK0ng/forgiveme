#[tauri::command]
pub fn exit_app0() {
    std::process::exit(0);
}
