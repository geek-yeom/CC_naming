body {
    font-family: 'Inter', sans-serif;
    background-color: #f4f7f6;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 20px;
    color: #333;
}

.container {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 900px;
}

.card {
    background-color: #f8f8f8;
    padding: 25px;
    border-radius: 8px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 30px;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

h1 {
    color: #2c3e50;
    margin-bottom: 5px;
    font-size: 2.5rem;
}

h2 {
    color: #4a69bd;
    margin-top: 0;
    margin-bottom: 15px;
    border-bottom: 2px solid #e8f0fe;
    padding-bottom: 10px;
    font-size: 1.75rem;
}

.section-description {
    color: #666;
    font-size: 0.9em;
    margin-bottom: 25px;
}

.input-group {
    margin-bottom: 20px;
    text-align: left;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #4a69bd;
}

.input-group input[type="text"],
.input-group select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: white;
}

.input-group input[type="text"]:focus,
.input-group select:focus {
    border-color: #4a69bd;
    outline: none;
    box-shadow: 0 0 5px rgba(74, 105, 189, 0.3);
}

.relative-input {
    position: relative;
    display: flex;
    align-items: center;
}

.relative-input select,
.relative-input input {
    flex-grow: 1;
}

.relative-input .small-button {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    color: #6c757d;
    padding: 8px 15px;
    border: none;
    font-size: 0.8rem;
    cursor: pointer;
}

.relative-input .small-button:hover {
    color: #5a6268;
}

.button-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 20px;
}

button {
    padding: 12px 25px;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-weight: bold;
}

.button-primary {
    background-color: #4a69bd;
    color: white;
}

.button-primary:hover {
    background-color: #3f58a3;
    transform: translateY(-2px);
}

.button-secondary {
    background-color: #e2e8f0;
    color: #4a5568;
}

.button-secondary:hover {
    background-color: #cbd5e0;
    transform: translateY(-2px);
}

.result-box {
    background-color: #e8f0fe;
    padding: 20px;
    border-radius: 8px;
    border: 1px dashed #a7c2f0;
    margin-top: 25px;
}

.result-title {
    font-size: 1.25rem;
    color: #4a69bd;
    margin-top: 0;
    margin-bottom: 10px;
}

.link-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    text-align: left;
}

.link-label {
    font-weight: 500;
    color: #666;
}

.link-output {
    word-break: break-all;
    white-space: pre-wrap;
    font-size: 0.9rem;
    background-color: white;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    margin-top: 5px;
}

.copy-button {
    background-color: #2c984f;
    color: white;
    font-size: 0.8rem;
    padding: 5px 10px;
    border-radius: 4px;
    float: right;
    margin-left: 10px;
}

.copy-button:hover {
    background-color: #217d41;
}

.hidden {
    display: none;
}
