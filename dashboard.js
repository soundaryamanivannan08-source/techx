const views = {
    overview: `
        <div class="bento-grid">
            <div class="bento-card stat-primary fade-up" style="grid-column: span 2; background: linear-gradient(135deg, #10b981 0%, #047a55 100%); color: white;">
                <h2>Welcome back, Dr. Vance.</h2>
                <p style="opacity:0.9;">System integrity is at 99.8%. 12 new sequence batches waiting for review.</p>
                <div style="margin-top:20px; font-size: 2rem; font-weight: 800;">4,281 <span style="font-size:1rem;font-weight:400;opacity:0.8;">Samples Analyzed Today</span></div>
            </div>
            
            <div class="bento-card fade-up">
                <div class="stat-icon" style="color:#10b981"><i class="fa-solid fa-microscope"></i></div>
                <div><h3>96.8%</h3><small>CRISPR Accuracy</small></div>
            </div>
            
            <div class="bento-card fade-up">
                <div class="stat-icon" style="color:#0ea5e9"><i class="fa-solid fa-server"></i></div>
                <div><h3>14.2TB</h3><small>Processed Data</small></div>
            </div>

            <div class="bento-card fade-up" style="grid-column: span 2; grid-row: span 2;">
                <h4>Global Node Activity</h4>
                <div class="chart-wrapper">
                    <canvas id="lineChart" style="margin-top:15px;"></canvas>
                </div>
            </div>
            
            <div class="bento-card fade-up" style="grid-column: span 2; grid-row: span 2; display: flex; flex-direction: column;">
                <h4>Active Personnel Overview</h4>
                <div class="team-list" style="margin-top: 15px; display:flex; flex-direction: column; gap: 15px;">
                    <div style="display:flex; align-items:center; gap:15px;">
                        <img src="assets/uifaces-popular-avatar (4).webp" style="width:45px; height:45px; border-radius:50%; object-fit:cover; border:2px solid #10b981;">
                        <div>
                            <strong>Dr. Emily Chen</strong><br><small style="color:var(--text-muted);">Lead Geneticist</small>
                        </div>
                        <span class="tag tag-green" style="margin-left:auto;">In Lab</span>
                    </div>
                    <div style="display:flex; align-items:center; gap:15px;">
                        <img src="assets/img_team.webp" style="width:45px; height:45px; border-radius:50%; object-fit:cover; border:2px solid #0ea5e9;">
                        <div>
                            <strong>Julian Thorne</strong><br><small style="color:var(--text-muted);">Neural Architect</small>
                        </div>
                        <span class="tag tag-blue" style="margin-left:auto;">Computing</span>
                    </div>
                </div>
            </div>
        </div>`,

    research: `
        <div class="bento-grid">
            <div class="bento-card fade-up" style="background: linear-gradient(rgba(16, 185, 129, 0.85), rgba(4, 122, 85, 0.95)), url('assets/lab6.webp'); background-size: cover; background-position: center; color: white;">
                <h4 style="color: white;">Active Projects</h4>
                <div style="font-size:2.5rem; font-weight:800; color: white;">12</div>
            </div>
            <div class="bento-card fade-up" style="background: linear-gradient(rgba(245, 158, 11, 0.85), rgba(180, 83, 9, 0.95)), url('assets/test-tubes2.webp'); background-size: cover; background-position: center; color: white;">
                <h4 style="color: white;">Pending Reviews</h4>
                <div style="font-size:2.5rem; font-weight:800; color: white;">5</div>
            </div>
            <div class="bento-card fade-up" style="grid-column: span 2;">
                <h4>Resource Allocation</h4>
                <div class="chart-wrapper">
                    <canvas id="barChart"></canvas>
                </div>
            </div>
            <div class="bento-card fade-up" style="grid-column: span 4;">
                <div style="display:flex; justify-content:space-between; margin-bottom:15px;">
                    <h4>Neo-Pathology Study</h4>
                    <span class="tag" style="background:#e0f2fe; color:#0369a1;">Sequencing</span>
                </div>
                <p style="color:var(--text-muted); font-size:0.9rem;">Mapping localized molecular structures in neural tissue regeneration.</p>
            </div>
        </div>`,

    staff: `
        <div class="bento-grid">
            <div class="bento-card colspan-full fade-up">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:10px;">
                    <h4>Staff Directory</h4>
                    <span class="tag tag-blue">Total: 124</span>
                </div>
                <div style="display:grid; gap:12px;">
                    <div style="display:flex; align-items:center; gap:15px; padding:15px; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0;">
                        <img src="assets/uifaces-popular-avatar (4).webp" style="width:40px; height:40px; border-radius:50%; object-fit:cover;">
                        <div><strong style="display:block;">Dr. Emily Chen</strong><small style="color:var(--text-muted);">Lead Geneticist</small></div>
                        <span class="tag tag-green" style="margin-left:auto;">Active</span>
                    </div>
                </div>
            </div>
        </div>`,

    employees: `
        <div class="bento-grid">
            <div class="bento-card colspan-full fade-up">
                <h4>Employee Portal</h4>
                <p style="color:var(--text-muted); margin-top:10px;">Central hub for employee benefits and payroll synchronization.</p>
            </div>
        </div>`,

    teams: `
        <div class="bento-grid">
            <div class="bento-card colspan-full fade-up">
                <h4>Project Teams</h4>
                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:20px; margin-top:20px;">
                    <div style="padding:20px; background:#f1f5f9; border-radius:15px;">
                        <strong>Team CRISPR</strong>
                        <p style="font-size:0.85rem; color:var(--text-muted); margin-top:5px;">6 members active.</p>
                    </div>
                </div>
            </div>
        </div>`,

    members: `
        <div class="bento-grid">
            <div class="bento-card colspan-full fade-up">
                <h4>Member Access Control</h4>
                <p style="color:var(--text-muted); margin-top:10px;">Manage lab clearance for rotating researchers.</p>
            </div>
        </div>`,

    sequencing: `
        <div class="bento-grid">
            <div class="bento-card fade-up" style="grid-column: span 2;">
                <h4>Sequence Quality Trends</h4>
                <div class="chart-wrapper">
                    <canvas id="seqLineChart"></canvas>
                </div>
            </div>
            <div class="bento-card fade-up" style="grid-column: span 2;">
                <h4>Genome Variants Found</h4>
                <div class="chart-wrapper">
                    <canvas id="seqPieChart"></canvas>
                </div>
            </div>
        </div>`,

    settings: `<div class="bento-card fade-up"><h4>System Nodes</h4><p>Security configuration and Neural Keys active.</p></div>`
};

function showData(type, btn) {
    document.querySelectorAll('.nav-link, .mobile-link').forEach(l => l.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const container = document.getElementById('dynamicContent');
    if (!container) return;
    container.innerHTML = views[type] || views['overview'];

    const titleMap = {
        overview: "Admin Dashboard",
        research: "Research Projects",
        sequencing: "Genetic Sequencing",
        staff: "Staff Directory",
        employees: "Employee Hub",
        teams: "Project Teams",
        members: "Member Management"
    };
    const titleEl = document.getElementById("pageTitle");
    if (titleEl) titleEl.innerText = titleMap[type] || "Dashboard";

    if (type === 'overview') {
        setTimeout(() => renderChart('lineChart', 'line', ['Jan', 'Feb', 'Mar', 'Apr'], [65, 80, 95, 125], '#10b981'), 100);
    } else if (type === 'research') {
        setTimeout(() => renderChart('barChart', 'bar', ['Study A', 'Study B', 'Study C'], [85, 42, 67], '#10b981'), 100);
    } else if (type === 'sequencing') {
        setTimeout(() => {
            renderChart('seqLineChart', 'line', ['Wk1', 'Wk2', 'Wk3', 'Wk4'], [92, 98, 94, 99], '#0ea5e9');
            renderChart('seqPieChart', 'pie', ['Type A', 'Type B'], [60, 40], ['#10b981', '#0ea5e9']);
        }, 100);
    }
}

function renderChart(id, type, labels, data, colors) {
    const ctx = document.getElementById(id);
    if (!ctx) return;

    // Destroy old chart if exists (prevents stacking issues)
    if (ctx.chartInstance) {
        ctx.chartInstance.destroy();
    }

    ctx.chartInstance = new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderColor: Array.isArray(colors) ? "#fff" : colors,
                tension: 0.4,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // 🔥 important
            layout: {
                padding: 10
            },
            plugins: {
                legend: {
                    display: type !== "line" && type !== "bar"
                }
            },
            scales: type !== "pie" ? {
                x: {
                    ticks: { autoSkip: true, maxTicksLimit: 6 }
                },
                y: {
                    beginAtZero: true
                }
            } : {}
        },
    });
}

function loadUserData() {
    const roleEl = document.getElementById("userRole");
    const emailEl = document.getElementById("userEmail");
    const avatarEl = document.getElementById("userAvatar");

    if (roleEl) roleEl.textContent = "Director";
    if (emailEl) emailEl.textContent = "vance@neogenix.bio";
    if (avatarEl) {
        avatarEl.src = "assets/uifaces-popular-avatar (4).webp";
        avatarEl.style.objectFit = "cover";
    }
}



const originalShowData = showData;
showData = function (type, btn) {
    originalShowData(type, btn);
};

function logout() { window.location.href = "login.html"; }

window.onload = () => {
    showData('overview', document.querySelector('.nav-link.active'));
    loadUserData();
    createMenuToggle();
};
