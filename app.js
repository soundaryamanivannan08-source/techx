const views = {
    overview: `
    <div class="bento-grid">
        <div class="bento-card colspan-2 fade-up" style="background: linear-gradient(135deg, #10b981 0%, #047a55 100%); color: white;">
            <h2>Patient Portal: Active</h2>
            <p style="opacity:0.9;">Your latest sequencing results and neural diagnostics are ready for review.</p>
            <button class="tag" style="margin-top:20px; border:none; background:rgba(255,255,255,0.2); color:white; padding:8px 16px; cursor:pointer;">View Final Reports</button>
        </div>

        <div class="bento-card colspan-1 fade-up">
            <div class="stat-icon" style="color:#0ea5e9"><i class="fa-solid fa-flask"></i></div>
            <div><h3>4</h3><small>Active Studies</small></div>
        </div>

        <div class="bento-card colspan-1 fade-up">
            <div class="stat-icon" style="color:#10b981"><i class="fa-solid fa-check"></i></div>
            <div><h3>Top 5%</h3><small>Genetic Resilience</small></div>
        </div>

        <div class="bento-card colspan-2 fade-up" style="grid-row: span 2;">
            <h4>Biomarker History</h4>
            <div class="chart-wrapper">
                <canvas id="mainChart"></canvas>
            </div>
        </div>

        <div class="bento-card colspan-2 fade-up" style="grid-row: span 2;">
            <h4>Sequence Quality Split</h4>
            <div class="chart-wrapper">
                <canvas id="sideChart"></canvas>
            </div>
        </div>
    </div>`,

    myResearch: `
    <div class="bento-grid">
        <div class="bento-card colspan-full fade-up">
            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px;">
                <div style="min-width:0;">
                    <h4 style="color:var(--navy); font-size:1.2rem; word-break:break-word;">Cancer Genomics Study</h4>
                    <p style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">Comprehensive analysis of genetic mutations in breast cancer patients.</p>
                </div>
                <span class="tag tag-green">Active Node</span>
            </div>
            
            <div style="display:flex; gap:20px; margin:20px 0; flex-wrap:wrap; border-top: 1px solid rgba(0,0,0,0.05); padding-top:20px;">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fa-solid fa-users" style="color:#0ea5e9;"></i> <strong>4</strong> members
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fa-solid fa-sack-dollar" style="color:#10b981;"></i> <strong>$500K</strong> budget
                </div>
            </div>

            <div style="height:12px; background:#f1f5f9; border-radius:10px; overflow:hidden;">
                <div style="width: 67%; height:100%; background: linear-gradient(90deg, #10b981, #0ea5e9);"></div>
            </div>
            <div style="display:flex; justify-content:space-between; margin-top:8px; font-size:0.85rem; font-weight:600;">
                <span style="color:var(--text-muted);">Compile Progress</span>
                <strong style="color:#10b981">67%</strong>
            </div>
        </div>
        
        <div class="bento-card colspan-full fade-up" style="background: var(--bg-app);">
            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px;">
                <div style="min-width:0;">
                    <h4 style="color:var(--navy); font-size:1.2rem; word-break:break-word;">Alzheimer's Early-Stage Biomarkers</h4>
                    <p style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">Identifying novel protein structures.</p>
                </div>
                <span class="tag" style="background:#e2e8f0; color:var(--text-muted);">Queued</span>
            </div>
        </div>
    </div>`,

    labResults: `
    <div class="bento-grid">
        <div class="bento-card colspan-full fade-up">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:10px;">
                <h4>Laboratory Diagnostics</h4>
                <span class="tag tag-blue">Last Sync: Today, 14:20</span>
            </div>
            
            <div style="overflow-x:auto;">
                <table style="width:100%; border-collapse:collapse; min-width:500px;">
                    <thead>
                        <tr style="text-align:left; border-bottom:2px solid #f1f5f9;">
                            <th style="padding:12px; font-size:0.85rem; color:var(--text-muted);">Test Type</th>
                            <th style="padding:12px; font-size:0.85rem; color:var(--text-muted);">Timestamp</th>
                            <th style="padding:12px; font-size:0.85rem; color:var(--text-muted);">Result</th>
                            <th style="padding:12px; font-size:0.85rem; color:var(--text-muted);">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid #f1f5f9;">
                            <td style="padding:12px; font-weight:600;">Neural Signal Sync</td>
                            <td style="padding:12px; font-size:0.85rem;">Oct 24, 2025</td>
                            <td style="padding:12px; font-size:0.85rem; color:#10b981;">99.2% Match</td>
                            <td style="padding:12px;"><span class="tag tag-green">Normal</span></td>
                        </tr>
                        <tr style="border-bottom:1px solid #f1f5f9;">
                            <td style="padding:12px; font-weight:600;">Protein Synthesis</td>
                            <td style="padding:12px; font-size:0.85rem;">Oct 20, 2025</td>
                            <td style="padding:12px; font-size:0.85rem; color:#f59e0b;">Low Marker</td>
                            <td style="padding:12px;"><span class="tag" style="background:rgba(245,158,11,0.1); color:#d97706;">Review</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>`,

    profile: `
    <div class="bento-grid">
        <div class="bento-card colspan-2 fade-up" style="text-align:center; padding-top:40px;">
            <div style="position:relative; width:120px; margin:0 auto 20px;">
                <img src="assets/img_team.webp" style="width:120px; height:120px; border-radius:30px; box-shadow:0 15px 30px rgba(16, 185, 129, 0.2); object-fit:cover;">
            </div>
            <h3 style="font-size:1.6rem; word-break:break-word;">Patient #BN-992</h3>
            <p style="color:var(--text-muted); font-size:0.9rem; margin-top:5px;">NeoGenix Subject</p>
            <div style="display:flex; justify-content:center; gap:10px; margin-top:20px; flex-wrap:wrap;">
                <span class="tag tag-green">Analyzed</span>
                <span class="tag tag-blue">Phase 2</span>
            </div>
        </div>

        <div class="bento-card colspan-2 fade-up">
            <h4>Biologic Profile</h4>
            <div style="margin-top:20px; display:grid; gap:16px; font-size:1rem;">
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid #f1f5f9; padding-bottom:10px; flex-wrap:wrap; gap:10px;">
                    <span style="color:var(--text-muted);">Division</span>
                    <strong>Somatic Research</strong>
                </div>
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid #f1f5f9; padding-bottom:10px; flex-wrap:wrap; gap:10px;">
                    <span style="color:var(--text-muted);">Location</span>
                    <strong>Geneva Node, CH</strong>
                </div>
                <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px;">
                    <span style="color:var(--text-muted);">Integration</span>
                    <strong>Oct 2025</strong>
                </div>
            </div>
        </div>
    </div>`,

    billing: `
    <div class="bento-grid">
        <div class="bento-card colspan-full fade-up" style="background: linear-gradient(135deg, #0ea5e9 0%, #1e293b 100%); color:white;">
            <p style="opacity:0.8; font-size:0.85rem; text-transform:uppercase; letter-spacing:1px;">Active Tier</p>
            <h2 style="margin:10px 0; font-size:2.5rem; color:white; word-break:break-word;">Pro-Researcher</h2>
            <p style="opacity:0.9;">Node Renewal: <strong>April 28, 2026</strong></p>
        </div>

        <div class="bento-card colspan-full fade-up">
            <h4>Data Computation Limits</h4>
            <div style="margin-top:20px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.9rem; flex-wrap:wrap; gap:10px;">
                    <span>Quantum Storage (14.2TB / 50.0TB)</span>
                    <strong style="color:#0ea5e9;">28%</strong>
                </div>
                <div style="height:12px; background:#f1f5f9; border-radius:10px; overflow:hidden;">
                    <div style="width:28%; height:100%; background:#0ea5e9;"></div>
                </div>
            </div>
            <div style="margin-top:25px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.9rem; flex-wrap:wrap; gap:10px;">
                    <span>Compute Nodes (850 / 1000)</span>
                    <strong style="color:#10b981;">85%</strong>
                </div>
                <div style="height:12px; background:#f1f5f9; border-radius:10px; overflow:hidden;">
                    <div style="width:85%; height:100%; background:#10b981;"></div>
                </div>
            </div>
        </div>
    </div>`
};

function showData(type, btn) {
    document.querySelectorAll(".nav-link, .mobile-link").forEach((el) => el.classList.remove("active"));
    if (btn) btn.classList.add("active");

    const sidebarMatch = document.querySelector(`.sidebar .nav-link[onclick*="'${type}'"]`);
    if (sidebarMatch) sidebarMatch.classList.add("active");

    const container = document.getElementById("dynamicContent");
    container.innerHTML = views[type];

    const titleMap = {
        overview: "User Node Dashboard",
        myResearch: "Assigned Research",
        labResults: "Lab Diagnostics",
        profile: "Biologic Profile",
        billing: "Network Billing",
    };
    document.getElementById("pageTitle").innerText = titleMap[type] || "Dashboard";

    if (type === "overview") {
        setTimeout(() => {
            renderChart("mainChart", "line", ["Mon", "Tue", "Wed", "Thu", "Fri"], [12, 19, 15, 22, 30], "#10b981");
            renderChart("sideChart", "doughnut", ["Verified", "Processing"], [80, 20], ["#10b981", "#0ea5e9"]);
        }, 50);
    }
}

function renderChart(id, type, labels, data, color) {
    const ctx = document.getElementById(id);
    if (!ctx) return;
    new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: color,
                borderColor: Array.isArray(color) ? "#fff" : color,
                tension: 0.4,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: type !== "line" && type !== "bar" } },
            layout: { padding: 10 }
        },
    });
}

function loadUserData() {
    const roleEl = document.getElementById("userRole");
    const emailEl = document.getElementById("userEmail");
    const avatarEl = document.getElementById("userAvatar");

    if (roleEl) roleEl.textContent = "Subject";
    if (emailEl) emailEl.textContent = "bn992@neogenix.bio";
    if (avatarEl) {
        avatarEl.src = "assets/img_team.webp";
        avatarEl.style.objectFit = "cover";
    }
}



function logout() { window.location.href = "login.html"; }

window.onload = () => {
    loadUserData();
    const activeLink = document.querySelector(".nav-link.active");
    showData("overview", activeLink);
    createMenuToggle();
};
